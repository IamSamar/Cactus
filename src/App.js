import React from 'react';
import './App.css';
import NavBar from './Components/Navbar.jsx';
import DigitalAgency from './Components/DigitalAgency.jsx';
import GetInTouch from './Components/GetInTouch.jsx';
import OurCompany from './Components/OurCompany.jsx';
import OurWork from './Components/OurWork.jsx';
import OurNews from './Components/OurNews.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Footer from './Components//Footer.jsx';
class App extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  return(
<div className="App">
  <div className="container">
  <NavBar/>
  <DigitalAgency/>
  <GetInTouch/>
  <OurCompany/>
  <OurWork/>
  <OurNews/>
  <ContactUs/>  
</div>
<Footer/>
</div>  
  )
}
}



export default App;
