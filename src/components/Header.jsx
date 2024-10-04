import { useEffect, useState } from 'react';
import './Header.css';

export function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerUp = document.querySelector('.headerUp');
      if (headerUp) {
        const headerUpHeight = headerUp.getBoundingClientRect().height;
        setIsSticky(window.scrollY > headerUpHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="headerUp">
        <img className="logo" src="/logo.jpg" alt="Logo"/>
      </div>
      <div className={`stickyHeader ${isSticky ? 'sticky' : ''}`}>
        <div className="headerD">
          <div className="leftSide">
            <img className="logo" src="/blogo.png" alt="Brand Logo"/>
          </div>
          <div className="rightSide">
            <a href="#vision">Vision</a>
            <a href="#design">Design</a>
            <a href="#inovation">Inovation</a>
            <a href="#buy"><button className="buyButton">Buy</button> </a>
          </div>
        </div>
      </div>
    </div>
  );
}