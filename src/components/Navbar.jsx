import "../styles/sass/navbar.scss";

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
          <img src='../src/images/logo.png' alt='logo' />
        </div>

        <ul className='nav__menu'>
          <li className='nav__item'>
            <a className='nav__link' href=''>
              Portfolio
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href=''>
              About
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href=''>
              News
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href=''>
              Contact
            </a>
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
