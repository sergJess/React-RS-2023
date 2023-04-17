import React from 'react';
import './loader.css';
export const Loader = () => {
  return (
    <div className="loader-inner">
      <span>Loading ...</span>
      <div className="loader"></div>
    </div>
  );
};
