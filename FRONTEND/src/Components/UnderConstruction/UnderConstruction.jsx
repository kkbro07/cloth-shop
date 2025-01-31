import React from 'react';
import './UnderConstruction.css'; // Import the CSS file

const UnderConstruction = () => {
    return (
        <div className="under-construction">
            <div className="construction-message">
                <h1>Under Construction</h1>
                <p>We're sewing up something special!</p>
            </div>
            <div className="construction-animation">
                <div className="building-animation">
                    <div className="building"></div>
                    <div className="roof"></div>
                </div>
                <div className="shirt-animation"></div>
            </div>
        </div>
    );
};

export default UnderConstruction;
