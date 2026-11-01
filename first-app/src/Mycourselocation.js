import {Link} from 'react-router-dom';
import React from 'react';
function Mycourselocation(){
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
                <h1 className="h3 mb-0 text-gray-800"><b>MY COURSES</b></h1>
              </div>
              {/* Content Row */}
              {/* Content Row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-info">CREATE COURSE.</h6>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a className="nav-link" href="#">1- About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">2- Goals</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">3- Duration</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">4- Location</a>
                        </li>
                      </ul>
                      <br />
                      <div className="container">
                        <form>
                          <div className="form-group">
                            <label><b>Where will the classes take place?*</b></label><br /><br />
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Online
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                In Person
                              </label>
                            </div>
                            <small style={{color: 'red'}}>Fill these input fields only if the classes are physical or In person*</small>
                            <div id="physicalClasses">
                              <div className="mb-3">
                                <label className="form-label"><b>Location*</b></label>
                                <input type="text" className="form-control" />
                              </div>
                              <div className="mb-3">
                                <label className="form-label"><b>City*</b></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <br />
                            <Link data-scroll to="/MycourseDuration" type="button" className="btn btn-info" >           
                          Back</Link>
                          <Link data-scroll to="/Viewprofile" type="button" className="btn btn-info" >           
                          Submit for Review</Link>
                          </div></form>
                      </div>
                    </div>
                  </div>
                  {/* Pie Chart */}
                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-info">Chats</h6>
                      </div>
                      {/* Card Body */}
                      <div className="card-body">
                        <div style={{padding: 0}}><div>
                            <div style={{color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontSize: 14, lineHeight: 16, position: 'relative', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', marginLeft: 0, padding: '20px 16px 16px'}}>
                              <div className="ZxO_Y">
                              </div>
                              <div className="_1rsEx ZxO_Y" style={{fontSize: 14, lineHeight: 16, height: 16, margin: '4px 0px 0px', color: 'rgba(0, 0, 0, 0.54)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                              </div>
                            </div>
                          </div><hr style={{margin: '-1px 0px 0px 72px', height: 1, border: 'none', backgroundColor: 'rgb(224, 224, 224)'}} /><div>
                            <div style={{color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontSize: 14, lineHeight: 16, position: 'relative', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', marginLeft: 0, padding: '20px 16px 16px'}}>
                              <div className="ZxO_Y">
                              </div>
                              <div className="_1rsEx ZxO_Y" style={{fontSize: 14, lineHeight: 16, height: 16, margin: '4px 0px 0px', color: 'rgba(0, 0, 0, 0.54)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} />
                            </div>
                          </div><hr style={{margin: '-1px 0px 0px 72px', height: 1, border: 'none', backgroundColor: 'rgb(224, 224, 224)'}} />
                          <div>
                            <div style={{color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontSize: 14, lineHeight: 16, position: 'relative', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', marginLeft: 0, padding: '20px 16px 16px'}}>
                              <div className="ZxO_Y">
                              </div>
                              <div className="_1rsEx ZxO_Y" style={{fontSize: 14, lineHeight: 16, height: 16, margin: '4px 0px 0px', color: 'rgba(0, 0, 0, 0.54)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                              </div>
                            </div>
                          </div><hr style={{margin: '-1px 0px 0px 72px', height: 1, border: 'none', backgroundColor: 'rgb(224, 224, 224)'}} /><div><div style={{color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontSize: 14, lineHeight: 16, position: 'relative', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', marginLeft: 0, padding: '20px 16px 16px'}}><div className="ZxO_Y" /><div className="_1rsEx ZxO_Y" style={{fontSize: 14, lineHeight: 16, height: 16, margin: '4px 0px 0px', color: 'rgba(0, 0, 0, 0.54)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} /></div></div><hr style={{margin: '-1px 0px 0px 72px', height: 1, border: 'none', backgroundColor: 'rgb(224, 224, 224)'}} /><div><div style={{color: 'rgba(0, 0, 0, 0.87)', display: 'block', fontSize: 14, lineHeight: 16, position: 'relative', transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms', marginLeft: 0, padding: '20px 16px 16px'}}><div className="ZxO_Y" /><div className="_1rsEx ZxO_Y" style={{fontSize: 14, lineHeight: 16, height: 16, margin: '4px 0px 0px', color: 'rgba(0, 0, 0, 0.54)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} /></div></div><hr style={{margin: '-1px 0px 0px 72px', height: 1, border: 'none', backgroundColor: 'rgb(224, 224, 224)'}} /></div>
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
                      <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                      <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                      </div>
                    </div>
                  </div>
                </div>
                <footer style={{width: '100%', backgroundColor: 'white', marginTop: 80}}>
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright © Abdul Rehman 2021</span>
                    </div>
                  </div>
                </footer>
              </div></div></div></div></div>
      
    );
}
export default Mycourselocation;