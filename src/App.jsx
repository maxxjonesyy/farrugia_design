import "./styles/sass/app.scss";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <motion.div className='wrapper'>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </motion.div>
  );
}

export default App;
