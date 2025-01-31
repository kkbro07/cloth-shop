import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TextWithIconsCarousel.css'; // Import the CSS file

const TextWithIconsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="text-with-icons-section">
      <div className="container">
        <div className="desktop-view">
          <div className="text-with-icons__item">
            <div className="text-with-icons__icon-wrapper">
              <img className="text-with-icons__custom-icon" src="//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.14.56_PM_100x.png?v=1726933504" alt="" />
            </div>
            <div className="text-with-icons__content-wrapper">
              <p className="heading heading--small">Free & Fast Delivery</p>
              <p>Shipping within 48 hours across India.</p>
            </div>
          </div>
          <div className="text-with-icons__item">
            <div className="text-with-icons__icon-wrapper">
              <img className="text-with-icons__custom-icon" src="//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.14.25_PM_100x.png?v=1726933472" alt="" />
            </div>
            <div className="text-with-icons__content-wrapper">
              <p className="heading heading--small">Return Policy</p>
              <p>Returns within 7 days.</p>
            </div>
          </div>
          <div className="text-with-icons__item">
            <div className="text-with-icons__icon-wrapper">
              <img className="text-with-icons__custom-icon" src="//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.17.21_PM_100x.png?v=1726933647" alt="" />
            </div>
            <div className="text-with-icons__content-wrapper">
              <p className="heading heading--small">Contact us</p>
              <p>Write us at support@overlaysclothing.com</p>
            </div>
          </div>
        </div>
        <div className="mobile-view">
          <Slider {...settings}>
            <div className="text-with-icons__item">
              <div className="text-with-icons__icon-wrapper">
                <img className="text-with-icons__custom-icon" src="//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.14.56_PM_100x.png?v=1726933504" alt="" />
              </div>
              <div className="text-with-icons__content-wrapper">
                <p className="heading heading--small">Free & Fast Delivery</p>
                <p>Shipping within 48 hours across India.</p>
              </div>
            </div>
            <div className="text-with-icons__item">
              <div className="text-with-icons__icon-wrapper">
                <img className="text-with-icons__custom-icon" src="//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.14.25_PM_100x.png?v=1726933472" alt="" />
              </div>
              <div className="text-with-icons__content-wrapper">
                <p className="heading heading--small">Return Policy</p>
                <p>Returns within 7 days.</p>
              </div>
            </div>
            <div className="text-with-icons__item">
              <div className="text-with-icons__icon-wrapper">
                <img className="text-with-icons__custom-icon" src="//overlaysnow.com/cdn/shop/files/Screenshot_2024-09-21_at_9.17.21_PM_100x.png?v=1726933647" alt="" />
              </div>
              <div className="text-with-icons__content-wrapper">
                <p className="heading heading--small">Contact us</p>
                <p>Write us at support@overlaysclothing.com</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TextWithIconsCarousel;
