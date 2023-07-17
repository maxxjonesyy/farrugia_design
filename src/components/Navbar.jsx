import "../styles/sass/navbar.scss";

import { Link } from "react-router-dom";

function Navbar() {
  function toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav__menu");

    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  }

  return (
    <header id='header'>
      <nav id='nav'>
        <div className='nav__image'>
          <Link to='/'>
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </div>

        <ul className='nav__menu'>
          <li className='nav__item'>
            <Link className='nav__link' to='/portfolio'>
              Portfolio
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/about'>
              About
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/news'>
              News
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>

        <div className='hamburger' onClick={toggleHamburger}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
