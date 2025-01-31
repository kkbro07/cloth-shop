import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Freedom.css';
import bannerImage1 from '../Assets/Freedom1.jpg';
import bannerImage2 from '../Assets/Freedom2.jpg';

const Freedom = () => {
  return (
    <div className="banner">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
      >
        <div className="banner-slide">
          <img src={bannerImage1} alt="Freedom For You" className="banner-image" />
          <div className="banner-content">
            <h1 className="banner-title">FREEDOM FOR YOU</h1>
            <p className="banner-subtitle">Enjoy ₹499 off on orders above 3999* with HIGH24</p>
            <button className="banner-button">Shop now</button>
          </div>
        </div>
        <div className="banner-slide">
          <div className="dreams-banner">
            <img src={bannerImage2} alt="Burn it all for your dreams" className="dreams-banner-image" />
            <div className="dreams-banner-content">
              <h1 className="dreams-banner-title">BURN IT ALL FOR</h1>
              <h2 className="dreams-banner-subtitle">YOUR DREAMS</h2>
              <p className="dreams-banner-description">Limited Edition Sleeveless Drop</p>
              <button className="dreams-banner-button">SHOP NOW</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Freedom;
