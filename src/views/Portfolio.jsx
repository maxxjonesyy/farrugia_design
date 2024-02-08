import "../styles/sass/portfolio.scss";

import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Navbar />

      <div className='portfolio'>
        <Project path='BIMBIMBI' location='av' title='Bimbimbi, Avalon' />
        <Project
          path='PALM BEACH HOUSE'
          location='pb'
          title='Iluka, Palm Beach'
        />
        <Project path='OYSTER BAY' location='ob' title='Oyster Bay' />
      </div>

      <h2 className='portfolio__byline'>More Projects coming soon...</h2>
    </motion.div>
  );
}

export default Portfolio;
