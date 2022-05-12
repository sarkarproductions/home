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
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
    <NavBar 
    heading="SR Productions"
    arg1="Services"
    arg2="About"
    arg3="Contact Us"
    arg4="Admin"
    />
    <Routes>
    <Route exact path='/' element={<LandingPage title="Sarkar Agency" slogan="A Broadcasting and Production House"/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/success' element={<FormSubmission/>}/>
    <Route exact path='/admin' element={<Admin heading="Admin Login Portal"/>}/>
    <Route exact path='/dashboard' element={<Dashboard/>}/>
    <Route path="*" element={<LandingPage title="SR Productions" slogan="A Broadcasting and Production House"/>} />
    </Routes>

    <Footer/>
    
    </>
  );
}

export default App;
