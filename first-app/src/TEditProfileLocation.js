
import React from 'react';
import {Link} from 'react-router-dom';


function TEditProfileLocation(){
    return(

        <div id="wrapper">
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3" >TASKILL</div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item active">
            <Link data-scroll to="/Viewprofile" className="nav-link" >           
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span></Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-envelope" />
              <span>VIEW PROFILE</span>
            </a>
          </li>
          {/*Tutor Vrification portal start here*/}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-envelope" />
              <span>Payment</span>
            </a>
          </li>
          {/*Tutor Vrification portal end here*/}
          <li className="nav-item">
            <Link data-scroll to="/Tutorinbox" className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" >           
            <i className="fas fa-envelope" />
            <span>INBOX</span></Link>
          </li>

          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="fas fa-fw fa-folder" />
              <span>MY COURSES</span>
            </a>
          </li>
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area" />
              <span>STUDENT REVIEWS</span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>  </ul>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* Sidebar Toggle (Topbar) */}
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars" />
              </button>
              {/* Topbar Search */}
              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for students here..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary bg-gradient-info" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
              {/* Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw" />
                  </a>
                  {/* Dropdown - Messages */}
                  <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw" />
                    {/* Counter - Alerts */}
                    <span className="badge badge-danger badge-counter">3+</span>
                  </a>
                  {/* Dropdown - Alerts */}
                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                      Alerts Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-primary">
                          <i className="fas fa-file-alt text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-success">
                          <i className="fas fa-donate text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">December 7, 2019</div>
                        $290.29 has been deposited into your account!
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="mr-3">
                        <div className="icon-circle bg-warning">
                          <i className="fas fa-exclamation-triangle text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="small text-gray-500">December 2, 2019</div>
                        Spending Alert: We've noticed unusually high spending for your account.
                      </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                  </div>
                </li>
                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw" />
                    {/* Counter - Messages */}
                    <span className="badge badge-danger badge-counter">7</span>
                  </a>
                  {/* Dropdown - Messages */}
                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                      Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="" />
                        <div className="status-indicator bg-success" />
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                          problem I've been having.</div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="" />
                        <div className="status-indicator" />
                      </div>
                      <div>
                        <div className="text-truncate">I have the photos that you ordered last month, how
                          would you like them sent to you?</div>
                        <div className="small text-gray-500">Jae Chun · 1d</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="" />
                        <div className="status-indicator bg-warning" />
                      </div>
                      <div>
                        <div className="text-truncate">Last month's report looks great, I am very happy with
                          the progress so far, keep up the good work!</div>
                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                        <div className="status-indicator bg-success" />
                      </div>
                      <div>
                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                          told me that people say this to all dogs, even if they aren't good...</div>
                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                      </div>
                    </a>
                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                  </div>
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Abdul Rehman</span>
                    <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                  </a>
                  {/* Dropdown - User Information */}
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                      Activity Log
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800"><b>EDIT PROFILE</b></h1>
              </div>
              {/* Content Row */}
              {/* Content Row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-info">Select your teaching medium and areas you
                        can teach in</h6>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                        <Link data-scroll to="/TEditProfileAbout" className="nav-link" >
                         About </Link>
                        </li>
                        <li className="nav-item">
                        <Link data-scroll to="/TEditProfileContact" className="nav-link" >
                         Contact </Link>
                        </li>
                        <li className="nav-item">
                        <Link data-scroll to="/TEditProfileExperties" className="nav-link" >
                         Experties </Link>
                        </li>
                        <li className="nav-item">
                        <Link data-scroll to="/TEditProfileEducation" className="nav-link" >
                         Education </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Location and Medium</a>
                        </li>
                      </ul>
                      <br />
                      <div className="container">
                        <div className="container-fluid">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                              <b>I can teach Online</b>
                            </label>
                          </div><br />
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                              <b>I can teach In Person / Physical</b>
                            </label>
                          </div><br />
                          <div className="container">
                            <span><b>City*</b></span><br />
                            <small>Select the city you are lives in*</small><br />
                            <select style={{width: '100%', padding: '10px'}} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                              <option selected>Open this select menu</option>
                              <option value={1}>Lahore</option>
                              <option value={2}>Sargodha</option>
                              <option value={3}>Islamabad</option>
                            </select>
                            <small>*Can't find your city in this list? <a href="#" data-toggle="modal" data-target="#exampleModal2">Add a suggestion</a></small>
                            <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Suggestion</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <input style={{width: '100%'}} type="text" placeholder="Add your city" />
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-info">Add Suggestion</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                              <b>I can teach at my Pesonal residence</b>
                            </label>
                            <span><b>Where do you live?</b></span><br />
                            <label><b>Complete Address</b></label><br />
                            <textarea type="text" style={{resize: 'none'}} rows={2} cols={65} className="form-group" defaultValue={""} />
                          </div><br />
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                              <b>I can teach Student's residence</b>
                            </label><br />
                            <span><b>Select upto 8 different areas you can teach in</b></span><br />
                            <div className="dropdown">
                              <button onclick="myFunction()" className="btn btn-info">Select the Areas</button>
                              <div id="myDropdown" className="dropdown-content">
                                <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()" />
                                <a href="#about">Iqbal Town</a>
                                <a href="#base">Johar Town</a>
                                <a href="#blog">Model Town</a>
                                <a href="#contact">Daroghawala</a>
                                <a href="#custom">Gulshan-e-Ravi</a>
                                <a href="#support">Lakshmi Chowk</a>
                                <a href="#tools">Railway Station</a>
                                <a href="#tools">Sultanpura Station</a>
                                <a href="#tools">Samanabad</a>
                              </div>
                            </div>
                          </div><br />
                        </div>
                        <br /><br />
                        <center><button className=" btn btn-info form-group">Update</button></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div></div></div>
          
    );
}
export default TEditProfileLocation;