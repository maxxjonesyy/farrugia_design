import Navbar from "../components/Navbar";
import "../styles/sass/news.scss";

function News() {
  return (
    <div id='news'>
      <Navbar />

      <iframe
        className='instagram'
        scrolling='yes'
        src='https://embedsocial.com/facebook_album/pro_hashtag/04c7e2e22bdb90ba683fe00598f477caa25ca07f'
      ></iframe>
    </div>
  );
}

export default News;
