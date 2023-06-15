import "../styles/sass/home.scss";

function Home() {
  const slides = [];

  const slidesLength = 6;

  for (let i = 1; i < slidesLength + 1; i++) {
    slides.push(`./src/images/HOMESLIDESHOW/slide${i}.jpg`);
  }

  return (
    <div id='home'>
      {slides.map((slide, index) => {
        return (
          <div key={index} className='slide'>
            <img src={slide} alt='slide' />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
