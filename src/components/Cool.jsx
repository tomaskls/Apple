import './Cool.css';

import coolIcon from '../img/icon-cool.jpg';
import affordableIcon from '../img/icon-affordable.jpg';
import progressiveIcon from '../img/icon-progressive.jpg';
import safeIcon from '../img/icon-safe.jpg';
import waterproofIcon from '../img/icon-waterproof.jpg';

export const Cool = () => {
  return (
    <div className="container-default">
      <img src={coolIcon} className="pav" alt="Cool Icon" />
      <img src={affordableIcon} className="pav" alt="Affordable Icon" />
      <img src={progressiveIcon} className="pav" alt="Progressive Icon" />
      <img src={safeIcon} className="pav" alt="Safe Icon" />
      <img src={waterproofIcon} className="pav" alt="Waterproof Icon" />
    </div>
  );
};

