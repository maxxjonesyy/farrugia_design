import "../styles/sass/about.scss";

import Navbar from "../components/Navbar";
import { useState } from "react";

function About() {
  const [info, setInfo] = useState("About");

  function handleClick(event) {
    event.target.classList.add("active");
    setInfo(event.target.innerHTML);

    document.querySelectorAll(".menu__item").forEach((button) => {
      if (button !== event.target) {
        button.classList.remove("active");
      }
    });
  }

  function handleZoom(event) {
    const modal = document.querySelector(".modal");
    const modalImage = document.querySelector(".modal__image");

    modal.style.display = "block";
    modalImage.src = event.target.src;
    modalImage.alt = event.target.alt;
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelector(".modal").style.display = "none";
    }
  });

  return (
    <div id='about-page'>
      <Navbar />

      <div className='about'>
        <div className='portrait'>
          <img
            className='portrait__image'
            src='./src/images/portrait.jpg'
            alt='portrait'
          />
          <p className='portrait__title'>Founder / Designer</p>
          <p className='portrait__name'>Sally Farrugia</p>
        </div>

        <div className='menu'>
          <button className='menu__item active' onClick={handleClick}>
            About
          </button>
          <button className='menu__item' onClick={handleClick}>
            Awards
          </button>

          {info === "About" ? (
            <p className='about'>
              I've been an interior designer for over 15 years. I specialize in
              Residential, Commercial Design with a strong proficiency in
              Project Management. Creating beautiful designs under a variety of
              budgets, styles, time-frames, and needs is what I do. Guiding
              clients through every phase of the design process to ensure to end
              result is spot on!
            </p>
          ) : (
            <div className='awards'>
              <div>
                <img
                  onClick={handleZoom}
                  className='awards__image'
                  data-action='zoom'
                  src='./src/images/AWARDS/magazine1.jpg'
                  alt='magazine feature 1'
                />
              </div>
              <div>
                <img
                  onClick={handleZoom}
                  className='awards__image'
                  src='./src/images/AWARDS/mbanswlogo2.png'
                  alt='master builders association award'
                />
              </div>
              <div>
                <img
                  onClick={handleZoom}
                  className='awards__image'
                  src='./src/images/AWARDS/magazine2.jpg'
                  alt='magazine feature 2'
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='modal'>
        <div className='modal__content'>
          <div className='modal__container'>
            <img className='modal__image' />
            <p
              className='modal__close'
              onClick={() =>
                (document.querySelector(".modal").style.display = "none")
              }
            >
              x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
