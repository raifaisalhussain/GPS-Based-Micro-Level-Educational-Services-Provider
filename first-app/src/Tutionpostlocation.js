import {Link} from 'react-router-dom';
import React from 'react';
function Tutionpostlocation(){
    return(
    
        <div id="wrapper">
        {/* Sidebar */}
        <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">TASKILL</div>
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
            <a className="nav-link collapsed" href="/StudentProfile" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-envelope" />
              <span>VIEW PROFILE</span>
            </a>
          </li>
          {/*Tutor Vrification portal end here*/}
          <li className="nav-item">
            <Link data-scroll to="/StudentInbox" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" >           
            <i className="fas fa-envelope" />
            <span>INBOX</span></Link>
          </li>
          <li className="nav-item">
            <Link data-scroll to="/Courseenrollmentnotpostedyet" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" >           
            <i className="fas fa-fw fa-folder" />
              <span>REGISTERED COURSES</span></Link>
          </li>
          
           {/*Tutor Vrification portal end here*/}
           <li className="nav-item">
            <Link data-scroll to="/Tpapplications" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" >           
            <i className="fas fa-envelope" />
              <span>MY TUTIONS </span></Link>
          </li>
           {/*Tutor Vrification portal end here*/}
           <li className="nav-item">
            <Link data-scroll to="/Tutionnotpostyet" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" >           
            <i className="fas fa-envelope" />
              <span>NEW TUTION POSTING</span></Link>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>
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
                        <img className="rounded-circle" src="img/undraw_profile_1.svg" alt />
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
                        <img className="rounded-circle" src="img/undraw_profile_2.svg" alt />
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
                        <img className="rounded-circle" src="img/undraw_profile_3.svg" alt />
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
                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt />
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
                <h1 className="h3 mb-0 text-gray-800"><b>Tutions Posting</b></h1>
              </div>
              {/* Content Row */}
              {/* Content Row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-info">Post a Tution</h6>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link" href="#">Subject &amp; Grades</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">Location</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Specifies</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Other Details</a>
                        </li>
                      </ul>
                      <br />
                      <div className="container">
                        <div className="row" id="inner">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-xs-2">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                  <label className="form-check-label" htmlFor="flexCheckDefault">
                                    <b> Online CLasses</b>
                                  </label><br />
                                  <small>Select this option if you want the tutor to teach via an online medium, such as Zoom,Microsoft Teams or skype.</small><br />
                                </div>
                              </div><br />
                              <div className="form-group">
                                <div className=" container" style={{width: '100%'}}>
                                  <select style={{width: '100%'}} className="form-select form-select-xl xs-3" aria-label="multiple select lg example">
                                    <option selected>Select Subjects*</option>
                                    <option value={1}>Computer Science</option>
                                    <option value={2}>Networking</option>
                                    <option value={3}>Computer Archiechture</option>
                                  </select>
                                  <small>*Can't find the subject in this list? <a href="#" data-toggle="modal" data-target="#exampleModal1">Add a suggestion</a></small>
                                  <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5 className="modal-title" id="exampleModalLabel">Add Suggestion</h5>
                                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                          </button>
                                        </div>
                                        <div className="modal-body">
                                          <input style={{width: '100%'}} type="text" placeholder="Add your subject" />
                                        </div>
                                        <div className="modal-footer">
                                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                          <button type="button" className="btn btn-info">Add Grades</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br /><hr /><br />
                          <div className="row" id="inner">
                            <div className="col-md-10">
                              <span><b>Enter the location where you want to be taught*</b></span><br /><br />
                              <div className="col-xs-8">
                                <input type="text" className="form-control" placeholder="Enter your area e.g DHA, Model Town etc." />
                                <br />
                                <div className="form-group">
                                  <div className=" container" style={{width: '100%'}}>
                                    <select style={{width: '100%'}} className="form-select form-select-lg mb-3" aria-label="multiple select lg example">
                                      <option selected>Select your city*</option>
                                      <option value={1}>Lahore</option>
                                      <option value={2}>Islamabad</option>
                                      <option value={3}>Rawalpindi</option>
                                      <option value={3}>Karachi</option>
                                    </select>
                                    <small>*Can't find the subject in this list? <a href="#" data-toggle="modal" data-target="#exampleModal2">Add a suggestion</a></small>
                                    <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Add Suggestion for City</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">×</span>
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <input style={{width: '100%'}} type="text" placeholder="Add your city" />
                                          </div>
                                          <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-info">Add City</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div><br /><br />

                            <center><Link data-scroll to="/Tutionposting" style={{marginLeft: 260}} className=" btn btn-info form-group" >  
                            <span>Back</span></Link></center> 

                            <center><Link data-scroll to="/TutionSpecific" style={{marginLeft: 10}} className=" btn btn-info form-group" >  
                            <span>Next</span></Link></center> 
                            
                          </div> 
                          {/* Modal */}
                          <div className="modal fade" id="exampleModal3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">Institute Details*</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="row" id="inner">
                                    <div className="col-md-5">
                                      <span><b>Institute*</b></span><br />
                                      <div className="form-group">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <span><b>Degree*</b></span><br />
                                      <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-2">
                                      <span><b>Year*</b></span><br />
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                              </div>
                            </div>
                          </div><br /><br />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content Row */}
                  <div className="row">
                    {/* Content Column */}
                    <div className="col-lg-6 mb-4">
                      {/* Footer */}
                      {/* End of Footer */}
                    </div>
                    {/* End of Content Wrapper */}
                  </div>
                  {/* End of Page Wrapper */}
                  {/* Scroll to Top Button*/}
                  <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                  </a>
                  {/* Logout Modal*/}
                  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current
                          session.</div>
                        <div className="modal-footer">
                          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                          <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div></div></div></div></div>
      
    );
}
export default Tutionpostlocation;