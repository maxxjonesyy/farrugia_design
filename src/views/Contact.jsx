import Navbar from "../components/Navbar";
import "../styles/sass/contact.scss";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      id='contact'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Navbar />

      <form
        className='form'
        action='https://formsubmit.co/maxxjonesyy@gmail.com'
        method='POST'>
        <div className='info'>
          <div>
            <h2>Get in touch:</h2>
            <p>0404 074 038</p>
            <p>sally@farrugiadesign.com.au</p>
          </div>

          <div>
            <h2>Studio:</h2>
            <p>Sydney // Bellingen</p>
            <p>(BY APPOINTMENT ONLY)</p>
          </div>
        </div>

        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea
          name='message'
          cols='30'
          rows='10'
          placeholder='Message...'
          required></textarea>
        <button className='submit' type='submit'>
          Submit
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
