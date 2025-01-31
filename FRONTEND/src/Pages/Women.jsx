// Women.js
import React from 'react';
import useDocumentTitle from './useDocumentTitle'; // Import the custom hook
import UnderConstruction from '../Components/UnderConstruction/UnderConstruction';

const Women = () => {
  useDocumentTitle("Women's Collection - Overlays Clothing"); // Set the page title

  return (
    <div>
      <h3>Women's Collection</h3>
      <UnderConstruction />
    </div>
  );
};

export default Women;
