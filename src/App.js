
import Navbars from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Footter } from "./components/Footter";




function App() {
  return (
  <>
  <Navbars/>
  <Home/>
  <About/>
  <Skills/>
  <Footter/>
 { /*
 <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="skils" element={<Skills/>}/>
  </Routes>*/}
  </>
  );
}

export default App;
