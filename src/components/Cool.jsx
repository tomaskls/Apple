import React from 'react';
import './Cool.css';

import coolIcon from '../img/icon-cool.jpg';
import affordableIcon from '../img/icon-affordable.jpg';
import progressiveIcon from '../img/icon-progressive.jpg';
import safeIcon from '../img/icon-safe.jpg';
import waterproofIcon from '../img/icon-waterproof.jpg';

const Cool = () => {
  return (
    <div className="container-default">
      <img src={coolIcon} className="" alt="Cool Icon" />
      <img src={affordableIcon} className="" alt="Affordable Icon" />
      <img src={progressiveIcon} className="" alt="Progressive Icon" />
      <img src={safeIcon} className="" alt="Safe Icon" />
      <img src={waterproofIcon} className="" alt="Waterproof Icon" />
    </div>
  );
};

export default Cool;
