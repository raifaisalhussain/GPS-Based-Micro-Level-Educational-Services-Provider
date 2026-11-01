import React from 'react'
import {Link} from 'react-router-dom';
function Home(){
    return(
        <div>
              {/* start navigation */}
        <nav className="navbar navbar-default templatemo-nav" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
                <span className="icon icon-bar" />
              </button>
              <a href="#" className="navbar-brand">TASKILL
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className = "active"><Link to = "/">HOME</Link></li>
                <li><a href="#team">TEAM</a></li>
                <li><a href="#service">SERVICE</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* end navigation */}
        {/* start home */}
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8">
                <h1 className="wow fadeIn" data-wow-offset={50} data-wow-delay="0.9s">Tried of your Traveling for Learning? <span>TASKILL</span></h1>
                <div className="element">
                  <div className="sub-element">Pick up Your Mobile now </div>
                  <div className="sub-element">Learn and Earn</div>
                  <div className="sub-element">At the same time</div>
                </div>
                <Link data-scroll to="/logIn" className="btn btn-default wow fadeInUp" data-wow-offset={50} data-wow-delay="0.6s">LOG IN</Link>
                <Link data-scroll to="/register" className="btn btn-default wow fadeInUp" data-wow-offset={50} data-wow-delay="0.6s">REGISTER</Link>
              </div>
            </div>
          </div>
        </section>
        {/* end home */}
        {/* start about */}
        <section id="service">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="wow bounceIn" data-wow-offset={50} data-wow-delay="0.3s">WE ARE <span>TASKILL</span></h2>
              </div>
              {/*
						<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-mobile"></i>
								</div>
								<h3 class="media-heading">Want to Teach?</h3>
							</div>
							<div class="media-body">
								<p>Who said Education doesn’t pay? ...</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-offset="50" data-wow-delay="0.9s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-comment-o"></i>
								</div>
								<h3 class="media-heading">Learn</h3>
							</div>
							<div class="media-body">
								<p>Get 'A' grade tutors. At anywhere. ...</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-offset="50" data-wow-delay="0.9s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-comment-o"></i>
								</div>
								<h3 class="media-heading">Groups</h3>
							</div>
							<div class="media-body">
								<p>You can study in groups too if you ...</p>
							</div>
						</div>
					</div>
					*/}
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.3s">
                <div className="team-wrapper">
                  <img src="images/dollar.jpg" className="img-responsive" alt="team img 3" />
                  <div className="team-des">
                    <h3>Want to Teach?</h3>
                    <p>Who said Education doesn’t pay? ...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.3s">
                <div className="team-wrapper">
                  <img src="images/learn.jpg" className="img-responsive" alt="team img 3" />
                  <div className="team-des">
                    <h3>Learn</h3>
                    <p>Get 'A' grade tutors. At anywhere. ...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.3s">
                <div className="team-wrapper">
                  <img src="images/Tutor.jpg" className="img-responsive" alt="team img 3" />
                  <div className="team-des">
                    <h3>Call Tutor</h3>
                    <p>Easiest way to help and get help in..</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.3s">
                <div className="team-wrapper">
                  <img src="images/groups.jpg" className="img-responsive" alt="team img 3" />
                  <div className="team-des">
                    <h3>Groups</h3>
                    <p>You can study in groups too if you ...</p>
                  </div>
                </div>
              </div>
              {/*
					<div class="col-md-3 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-html5"></i>
								</div>
								<h3 class="media-heading">Call Tutor</h3>
							</div>
							<div class="media-body">
								<p>Easiest way to help and get help in..</p>
							</div>
						</div>
					</div>
					*/}
            </div>
          </div>
        </section>
        {/* end about */}
        {/* start team */}
        <section id="team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="wow bounceIn" data-wow-offset={50} data-wow-delay="0.3s"><span>TASKILL</span> TEAM</h2>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.3s">
                <div className="team-wrapper">
                  <img src="images/member-1.jpg" className="img-responsive" alt="team img 3" />
                  <div className="team-des">
                    <h4>Hamza Akbar</h4>
                    <span>Director</span>
                    <p>Quality Assurance </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.3s">
                <div className="team-wrapper">
                  <img src="images/talib.jpg" className="img-responsive" alt="team img 1" />
                  <div className="team-des">
                    <h4>Talib  Hussain</h4>
                    <span>Director</span>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.6s">
                <div className="team-wrapper">
                  <img src="images/Faisal.jpg" className="img-responsive" alt="team img 2" />
                  <div className="team-des">
                    <h4>Faisal Hussain</h4>
                    <span>Director</span>
                    <p />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="1.6s">
                <div className="team-wrapper">
                  <img src="images/Abdul.jpg" className="img-responsive" alt="team img 4" />
                  <div className="team-des">
                    <h4>Abdul Rehman</h4>
                    <span>Director</span>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end team */}
        {/* start service */}
        <section id="service">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="wow bounceIn" data-wow-offset={50} data-wow-delay="0.3s">OUR <span>TASKILL</span> THINGS</h2>
              </div>
              <div className="col-md-4 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <i className="fa fa-laptop" />
                <img src="images/Tutor.jpg" className="img-responsive" alt="team img 4" />
                <h4>Go to Tutor</h4>
                <p />
              </div>
              <div className="col-md-4 active wow fadeIn" data-wow-offset={50} data-wow-delay="0.9s">
                <i className="fa fa-money" />
                <img src="images/dollar.jpg" className="img-responsive" alt="team img 4" />
                <h4>Pay</h4>
                <p />
              </div>
              <div className="col-md-4 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <i className="fa fa-cog" />
                <img src="images/5591.jpg" className="img-responsive" alt="team img 4" />
                <h4>24/7</h4>
                <p />
              </div>
            </div>
          </div>
        </section>
        {/* end servie */}
        {/* start portfolio */}
        <section id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="wow bounceIn" data-wow-offset={50} data-wow-delay="0.3s"><span>TASKILL</span> PORTFOLIO</h2>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img1.jpg" className="img-responsive" alt="portfolio img 1" />
                  <div className="portfolio-overlay">
                    <h4>Project One</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img2.jpg" className="img-responsive" alt="portfolio img 2" />
                  <div className="portfolio-overlay">
                    <h4>Project Two</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img3.jpg" className="img-responsive" alt="portfolio img 3" />
                  <div className="portfolio-overlay">
                    <h4>Project Three</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img4.jpg" className="img-responsive" alt="portfolio img 4" />
                  <div className="portfolio-overlay">
                    <h4>Project Four</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img3.jpg" className="img-responsive" alt="portfolio img 3" />
                  <div className="portfolio-overlay">
                    <h4>Project Five</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img4.jpg" className="img-responsive" alt="portfolio img 4" />
                  <div className="portfolio-overlay">
                    <h4>Project Six</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img1.jpg" className="img-responsive" alt="portfolio img 1" />
                  <div className="portfolio-overlay">
                    <h4>Project Seven</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset={50} data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img2.jpg" className="img-responsive" alt="portfolio img 2" />
                  <div className="portfolio-overlay">
                    <h4>Project Eight</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                    <a href="#" className="btn btn-default">DETAIL</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end portfolio */}
        {/* start contact */}
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="wow bounceIn" data-wow-offset={50} data-wow-delay="0.3s">CONTACT <span style={{color: 'white'}}>TASKILL</span></h2>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset={50} data-wow-delay="0.9s">
                <form action="#" method="post">
                  <label>NAME</label>
                  <input name="fullname" type="text" className="form-control" id="fullname" />
                  <label>EMAIL</label>
                  <input name="email" type="email" className="form-control" id="email" />
                  <label>MESSAGE</label>
                  <textarea name="message" rows={4} className="form-control" id="message" defaultValue={""} />
                  <input type="submit" className="form-control" />
                </form>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset={50} data-wow-delay="0.6s">
                <address>
                  <p className="address-title">OUR ADDRESS</p>
                  <span>Model Town,Link Road </span>
                  <p><i className="fa fa-phone" /> +92 310 4057405</p>
                  <p><i className="fa fa-envelope-o" /> taskillserviceprovider@gmail.com</p>
                  <p><i className="fa fa-map-marker" /> DHA PHASE 8</p>
                </address>
                <ul className="social-icon">
                  <li><h4>WE ARE SOCIAL</h4></li>
                  <li><a href="#" className="fa fa-facebook" /></li>
                  <li><a href="#" className="fa fa-twitter" /></li>
                  <li><a href="https://www.youtube.com/" className="fa fa-youtube" /></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end contact */}
        </div>
    );
}
export default Home;