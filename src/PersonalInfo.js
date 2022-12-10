import React from 'react';
import Vector from './Images/Vector.svg'
import Merch from './button';
import Vector1 from './Images/Icon.svg'
import Vector2 from './Images/arrow.svg'
import Checkout from './Checkout';
import Vector3 from './Images/udgam.svg';
import Navbar from './Navbar';

function PersonalInfo(){

    return(
        <>
  
    <Navbar/>

  <h1 className="Pinfo">PERSONAL INFORMATION</h1>
   <p>
     *
   </p>
<div className="box">

</div>
<div className="row">
  <div className="column c1">PERSONAL DETAILS</div>
  <div className="column c2">MERCH KIT</div>
  <div className="column c3">PAYMENT</div>
</div>
<div className="first">
<div className="f"><input type="text" name="fname" placeholder="First name..."/></div>
<div className="l">
  <input type="text" name="lname" placeholder="Last name..."/>
</div>
</div>
<input className="e"type="text1" name="email" placeholder="Type your Email..."/ >
<p className="H2">Only for IIT Guwahati Students</p>
<div className="first second">
<input type="text" name="Outlook" placeholder="Outlook mail id..."/>
<input type="text" name="RollNo" placeholder="Roll no..."/>
</div>
<p className="H2 H3">Password shoud have at least 8 characters</p>
<div className="first third">
  <input type="text" name="CreatePass" placeholder="Create Password"/>
  <input type="text" name="ConfirmPass" placeholder="Confirm Password"/>
</div>
<p className='delta1'>Accepted</p>
<div className="card">
<img src={require("./Images/udgamPassBG.png")} alt="CardBG"></img>
<img  className ="udgam" src={Vector3}/>

<p className="alpha">Udgam pass</p>
<p className="beta">Total Price -</p>
<p className="beta beta1">Udgam Pass -</p>
<p className="beta beta2">Merchkit Addon -</p>
<p className="beta beta3">Events List - Internfair, Pmx, Fun events  </p>
<p className="beta beta4">Exclusive Perks - Voiceflow thing, Discount</p>

<p className="beta beta4 beta5"><br/>Coupons</p>

<p className="gamma">$199</p>
<p className="gamma1">$199</p>
<p className="gamma1 gamma2">$199</p>
</div>
<div className="vector">
  <img className=" img1"src={Vector}alt="img1"/>
  <img className="img1 img2"src={Vector} alt="img1"/>
  <img className="img1 img3"src={Vector} alt="img1"/>
  <img className="img1 img4"src={Vector} alt="img1"/>

</div>
<div className='Merch'><Merch icon={Vector1} title=" Merch kit addon"/></div>
<div className="Checkout"><Checkout title="CHECK OUT →" /></div>
 

        </>
    )

}

export default PersonalInfo;