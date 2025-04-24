import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <>
      <>
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="footer-item">
            <div className="company-brand">
              <img
                src="images/main-logo.png"
                alt="logo"
                className="footer-logo"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem
                posuere sit iaculis amet, ac urna. Adipiscing fames semper erat
                ac in suspendisse iaculis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>About Us</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/Blog/">articles </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>Discover</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/Popular/">Books</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>My account</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/Login/">Sign In</Link>
              </li>
              <li className="menu-item">
                <Link to="/Cart/">View Cart</Link>
              </li>
              <li className="menu-item">
                <Link to="/Order/">order</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-menu">
            <h5>Help</h5>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/HelpCenter/">Help center</Link>
              </li>
              <li className="menu-item">
                <Link to="/ContactUs/">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* / row */}
    </div>
  </footer>
  <div id="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6">
                <p>
                  © 2022 All rights reserved.
                 
                </p>
              </div>
            
            </div>
          </div>
          {/*grid*/}
        </div>
        {/*footer-bottom-content*/}
      </div>
    </div>
  </div>
</>

      </>
    </div>
  )
}
