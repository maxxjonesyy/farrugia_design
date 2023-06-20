import "../styles/sass/home.scss";

import Navbar from "../components/Navbar";

function Home() {
  const images = [];
  const imagesLength = 6;
  let counter = 0;

  for (let i = 1; i < imagesLength + 1; i++) {
    images.push(`./src/images/HOMESLIDESHOW/slide${i}.jpg`);
  }

  function sliderAnimation(counter) {
    document.querySelectorAll(".slide__img").forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }

  setInterval(() => {
    if (counter < imagesLength) {
      sliderAnimation(counter);
      counter++;
    } else if (counter === imagesLength) {
      counter = 0;
    }
  }, 6000);

  return (
    <div id='home'>
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
    </div>
  );
}

export default Home;
