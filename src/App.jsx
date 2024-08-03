import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx';
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Login from './autho/Login'
import Protected from './autho/Protected.jsx';
import Account from './autho/Account.jsx';
import Signup from './autho/SignUp.jsx';
import Form from './Pages/Form.jsx'
import Success from './Pages/Success.jsx';
import Service from './Components/Services.jsx';
import PersonalTrainer from './ConsultantsCard/PersonalTrainer.jsx';
import PersonalStylists from './ConsultantsCard/PersonalStylists.jsx';
import I_FAdvisors from "./ConsultantsCard/I_FAdvisors.jsx"
import HealthCare from './ConsultantsCard/HealthCare.jsx'
import LegalGuidance from './ConsultantsCard/LegalGuidance.jsx'
import Web_AppDevelopment from './ConsultantsCard/Web_AppDevelopment.jsx'
import MarketingConsultations from './ConsultantsCard/MarketingConsultations.jsx'
import CarrerConsultation from './ConsultantsCard/CarrerConsultation.jsx'
import PopUp from './Components/PopUp.jsx';

const App = () => {

  return (
    <AuthContextProvider>
      <Router>
        <div className="min-h-screen ">
          <div className='gradient-bg-welcome'>
            <NavBar />
            <PopUp />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/services' element={<Service />} />
              <Route path='/services/personaltrainer-fitnesscoach' element={<PersonalTrainer />} />
              <Route path='/services/personalstylists-fashiondesigners' element={<PersonalStylists />} />
              <Route path='/services/investment&financialadvisors' element={<I_FAdvisors />} />
              <Route path='/services/healthcare&wellness' element={<HealthCare />} />
              <Route path='/services/Legal Guidance' element={<LegalGuidance />} />
              <Route path='/services/web-appdevelopment' element={<Web_AppDevelopment />} />
              <Route path='/services/marketingconsultations' element={<MarketingConsultations />} />
              <Route path='/services/carrercounsellingconsultation' element={<CarrerConsultation />} />
              <Route path='/form' element={
                <Protected>
                  <Form />
                </Protected>
              } />
              <Route path='/success' element={<Success />} />
              <Route
                path='/account'
                element={
                  <Protected>
                    <Account />
                  </Protected>
                }
              />
              {/* Add more routes as needed */}
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </AuthContextProvider>
  )
}

export default App