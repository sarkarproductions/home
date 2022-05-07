import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './Components/NavBar';
import LandingPage from './Components/LandingPage';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import FormSubmission from './Components/FormSubmission';
function App() {
  return (
    <>
    <NavBar 
    heading="SR Productions"
    arg1="Services"
    arg2="About"
    arg3="Contact Us"
    />
    <Routes>
    <Route exact path='/' element={<LandingPage title="SR Productions" slogan="A Broadcasting and Production House"/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/success' element={<FormSubmission/>}/>
    </Routes>

    <Footer/>
    
    </>
  );
}

export default App;
