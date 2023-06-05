import React from 'react'
import "./index.scss"
const  Footerr= () => {
  return (
    <div>
       <div className="footer">
      <div className="hisse1">
        <h2>KEEP IN TOUCH</h2>
        <p>Our conversation is just getting started</p>

        <div className="searchinput">
          <input type="text" placeholder="Your email address" />
          <i class="fa-solid fa-right-long"></i>
        </div>
        <div className="icons">
          <a
            className="fa-brands fa-instagram"
            href="https://www.instagram.com/"
          ></a>
          <a
            className="fa-brands fa-facebook"
            href="https://www.facebook.com/"
          ></a>
          <a className="fa-brands fa-twitter" href="https://twitter.com/"></a>
          <a
            className="fa-brands fa-pinterest"
            href="https://dribbble.com/t"
          ></a>
        </div>
      </div>

      <div className="hisse2">
        <ul className="information">
            <li className="info">INFORMATION</li>
            <a href="#"><li>My Account</li></a>
            <a href="#"><li>Login</li></a>
            <a href="#"><li>My Cart</li></a>
            <a href="#"> <li>Wishlist</li></a>
            <a href="#"> <li>Checkout</li></a>      
        </ul>

        <ul className="services">
          <li className="ser">SERVICES</li>
          <a href="#"><li>How to use?</li></a>
            <a href="#"> <li>Shipping</li></a>
           <a href="#"><li>Return Policy</li></a>
            <a href="#"><li>Privacy</li></a>
            
        </ul>
        
      </div>
    </div>
    </div>
  )
}

export default Footerr
