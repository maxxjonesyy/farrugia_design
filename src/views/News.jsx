import Navbar from "../components/Navbar";
import "../styles/sass/news.scss";
import { motion } from "framer-motion";

function News() {
  return (
    <motion.div
      id='news'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Navbar />

      <iframe
        className='instagram'
        scrolling='yes'
        src='https://embedsocial.com/facebook_album/pro_hashtag/04c7e2e22bdb90ba683fe00598f477caa25ca07f'></iframe>
    </motion.div>
  );
}

export default News;
