import React, { useEffect, useState } from "react";
import axios from "axios";
import { useShopContext } from "../../Context/ShopContext";

const Profile = () => {
  const { resetCart } = useShopContext(); // Access resetCart function from context
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleLogout = () => {
    // Reset the cart when logging out
    resetCart();
    localStorage.removeItem("auth-token");
    window.location.href = "/login"; // Redirect to the login page
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("auth-token");
        if (!token) {
          setError("No authentication token found. Please log in.");
          setLoading(false);
          return;
        }
        const response = await axios.get("http://localhost:5000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.response?.data?.message || "Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setIsChangingPassword(true);
    try {
      const token = localStorage.getItem("auth-token");
      const response = await axios.patch(
        "http://localhost:5000/api/user/change-password",
        { newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Password changed successfully.");
        setNewPassword("");
      } else {
        alert("Password change failed. Please try again.");
      }
    } catch (err) {
      console.error("Error changing password:", err);
      alert(
        err.response?.data?.message ||
          "Failed to change password. Please try again later."
      );
    } finally {
      setIsChangingPassword(false);
    }
  };

  if (loading) return <div>Loading user data...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h1>Profile</h1>
      <div style={{ marginBottom: "20px" }}>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <h2>Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div style={{ marginBottom: "10px" }}>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "10px" }}
          />
        </div>
        <button type="submit" disabled={isChangingPassword}>
          {isChangingPassword ? "Changing..." : "Change Password"}
        </button>
      </form>
      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
