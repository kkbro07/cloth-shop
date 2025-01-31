// Home.js
import React from 'react';
import Freedom from '../Components/Freedom/Freedom';
import Grid from '../Components/Grid/Grid';
import Popular from '../Components/Popular/Popular';
import Round from '../Components/Round/Round';
import VideoSection from '../Components/video/VideoSection';
import useDocumentTitle from './useDocumentTitle'; // Import the custom hook
import NewCollections from '../Components/NewCollections/NewCollections'


const Home = () => {
  useDocumentTitle("Home - Overlays Clothing"); // Set the page title

  return (
    <div>
      <Freedom />
      <Round />
      <br />
      <Popular />
      <br />
      <Grid />
      <NewCollections/>
      <VideoSection />
      <br />
      <br />
    </div>
  );
};

export default Home;
