import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <NavBar 
    heading="SR Productions"
    arg1="Services"
    arg2="About"
    arg3="Contact Us"
    />
    <LandingPage title="SR Productions" slogan="A Broadcasting and Production House"/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
    {/* <BrowserRouter>
    
    </BrowserRouter> */}
    </>
  );
}

export default App;
