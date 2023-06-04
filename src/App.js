import { Route, Routes } from "react-router-dom";
import Header from "./layout/header";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Detail from "./pages/detail";
import Footerr from "./layout/footer";


function App() {
  return (
    <div>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/:imdbID" element={<Detail />} />
    </Routes>

    <Footerr/>
    </div>
  );
}

export default App;
