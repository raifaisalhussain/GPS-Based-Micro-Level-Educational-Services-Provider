import React from 'react'

function Header(){
    return(
        <div>
             <div className="preloader">
          <div className="sk-spinner sk-spinner-wave">
            <div className="sk-rect1" />
            <div className="sk-rect2" />
            <div className="sk-rect3" />
            <div className="sk-rect4" />
            <div className="sk-rect5" />
          </div>
        </div>
        {/* end preloader */}
        {/* start header */}
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p><i className="fa fa-phone" /><span> Phone</span>+92 310 4057405</p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <p><i className="fa fa-envelope-o" /><span>Email</span><a style={{color: 'white'}} href="mailto:taskillserviceprovider@gmail.com">taskillserviceprovider@gmail.com</a></p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <ul className="social-icon">
                  <li><span>Meet us on</span></li>
                  <li><a href="#" className="fa fa-facebook" /></li>
                  <li><a href="#" className="fa fa-twitter" /></li>
                  <li><a href="#" className="fa fa-instagram" /></li>
                  <li><a href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        </div>
    )
}

export default Header;