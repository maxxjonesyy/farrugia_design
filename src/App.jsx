import "./styles/sass/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import News from "./views/News";
import Contact from "./views/Contact";

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
