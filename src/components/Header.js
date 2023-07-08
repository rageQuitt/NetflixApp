import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.pageYOffset > 100;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? 'header scrolled' : 'header'}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logos-marques.com/wp-content/uploads/2021/03/Netflix-logo.png" alt="Netflix logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt="User profile picture" />
        </a>
      </div>
    </header>
  );
}

export default Header;
