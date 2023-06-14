import "../styles/sass/navbar.scss";

function Navbar() {
  function toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav__list");

    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  }

  return (
    <header id='header'>
      <nav id='nav'>
        <div className='nav__image'>
          <img src='../src/images/logo.png' alt='logo' />
        </div>

        <div className='hamburger' onClick={toggleHamburger}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        <ul className='nav__list'>
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
      </nav>
    </header>
  );
}

export default Navbar;
