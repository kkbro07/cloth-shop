
import React from 'react';
import './Grid.css';
import newarrivals from '../Assets/Mobile_Desktop_A.webp';
import poloshirts from '../Assets/Desktop_E.webp';
import fullsleeves from '../Assets/Desktop_G.jpg';

const Grid = () => {
  return (
    <div className="section__color-wrapper">
      <div className="container">
        <div className="grid-container-interactive-cursor">
          <div className="left-card">
            {/* <a href="#"> */}
              <img 
                src={newarrivals} 
                alt="Shop OV FREE TECH" 
                className="left-card-image-desktop"
              />
              <h3 className="card-text">Shop OV FREE TECH</h3>
            {/* </a> */}
          </div>
          <div className="right-cards">
            <div className="right-card">
              {/* <a href="#"> */}
                <img
                  src={poloshirts} 
                  alt="Formal Polo Shirts" 
                  className="right-card-desktop-image"
                />
                <img 
                  src={poloshirts} 
                  alt="Formal Polo Shirts" 
                  className="right-card-mob-image"
                />
                <h3 className="card-text">Formal Polo Shirts</h3>
              {/* </a> */}
            </div>
            <div className="right-card">
              {/* <a href="#"> */}
                <img 
                  src={fullsleeves} 
                  alt="Casual Full Sleeves" 
                  className="right-card-desktop-image"
                />
                <img 
                  src={fullsleeves} 
                  alt="Casual Full Sleeves" 
                  className="right-card-mob-image"
                />
                <h3 className="card-text">Casual Full Sleeves</h3>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Grid;
  