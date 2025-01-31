import React, { useEffect } from 'react';
import './VideoSection.css'; // Import any CSS for styling
import videoSrc1 from '../Assets/yourVideo.mp4'; // Adjust the path as necessary
import videoSrc2 from '../Assets/yourSecondVideo.mp4'; // Add path for the second video
import RichHeritage from '../video/RichHeritage';


const VideoSection = () => {
  useEffect(() => {
    const videos = [document.getElementById('myVideo1'), document.getElementById('myVideo2')];

    const tryPlayVideos = () => {
      videos.forEach(video => {
        video.play().catch(() => {
          // If autoplay is blocked, wait for user interaction
          document.body.addEventListener(
            'touchstart',
            () => {
              video.play();
            },
            { once: true } // Only trigger the event once
          );
        });
      });
    };

    document.addEventListener('DOMContentLoaded', tryPlayVideos);

    return () => {
      document.removeEventListener('DOMContentLoaded', tryPlayVideos);
    };
  }, []);

  return (
    <div className="section__color-wrapper">
      <div className="container">
        <div className="liquid">
        <RichHeritage/>
          {/* First Video */}
          <a href="https://overlaysnow.com/collections/polo-shirts">
            <video id="myVideo1" autoPlay loop muted playsInline>
              <source src={videoSrc1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
        <div className="liquid">
          <a href="https://overlaysnow.com/collections/polo-shirts">
            <video id="myVideo2" autoPlay loop muted playsInline>
              <source src={videoSrc2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
