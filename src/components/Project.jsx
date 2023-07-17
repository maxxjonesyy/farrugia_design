import "../styles/sass/project.scss";

function Project({ path, location, title }) {
  let images = [];
  const imagesLength = 8;

  for (let i = 1; i < imagesLength + 1; i++) {
    images.push(`/images/${path}/${location}${[i]}.jpg`);
  }

  return (
    <div id='project'>
      <div>
        <img
          className={`feature feature__${location}`}
          src={images[0]}
          alt='project feature'
        />

        <div className='project__slideshow'>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className='slideshow__image'
                  src={image}
                  alt={`${path} image ${index + 1}`}
                  onClick={(e) => {
                    document.querySelector(`.feature__${location}`).src =
                      e.target.src;
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <h2 className='project__title'>{title}</h2>
    </div>
  );
}

export default Project;
