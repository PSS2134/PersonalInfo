import React from 'react'
import "./navbar.css";
import Icon from "./Images/Udgam23.svg";
import Hum from "./Images/menu.svg";
import Buy from "./Images/Vector 81.svg";
import Merch from './button';


function Navbar() {
  
  return (
   <div className='header'>
    <section className='navbar'>
      <div className='image-container'>
        <img className='logo' src={Icon} style={{width: "150px",height: "50px"}}  alt='logo' />
      </div>

      <div className='second-container'>
          <ul className='nav-links'>
            <li className='nav-item'><a href='#container'>Events</a></li>
            <li className='nav-item'><a href='#'>Schedule</a></li>
            <li className='nav-item'><a href='#merch'>Merch</a></li>
          </ul>

        <img className='hamburger' src={Hum} alt='menu'/>
        
        <div className='yellow-button'>
           
           <Merch icon={Buy} title="BUY NOW"/>

        </div>
        

      </div>
      

      
      </section>
      
    </div>
  )
}

export default Navbar