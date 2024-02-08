import "../styles/sass/home.scss";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Home() {
  const images = [];
  const maxSlides = 6;
  let counter = 0;

  for (let i = 1; i < maxSlides + 1; i++) {
    images.push(`/images/HOMESLIDESHOW/slide${i}.webp`);
  }

  function sliderAnimation(counter) {
    document.querySelectorAll(".slide__img").forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }

  useEffect(() => {
    const slider = setInterval(() => {
      if (counter === maxSlides) {
        counter = 0;
      } else {
        sliderAnimation(counter);
        counter++;
      }
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  return (
    <motion.div
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Navbar />

      <div className='slide__container'>
        {images.map((slide, index) => {
          return (
            <div key={index} className='slide'>
              <img className='slide__img' src={slide} alt='slide' />
            </div>
          );
        })}
      </div>

      <p className='slide__byline'>
        residential design - commercial design - project management
      </p>
    </motion.div>
  );
}

export default Home;
