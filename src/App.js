
import Navbars from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { Footer } from "./components/Footter";
import Project from "./components/Project";




function App() {
  return (
  <>
  <Navbars/>
  <Home/>
  <About/>
  <Skills/>
  <Project/>
  <Footer/>
  
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
