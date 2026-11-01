import React from 'react'
import {Link} from 'react-router-dom';
function Expertiselevel(){
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
      <Link data-scroll to="/Category" className="nav-link" >
          <span><b>Category</b></span>
          </Link>
      </li>
      <br/>
      <li className="nav-item active">
        <Link data-scroll to="/Expertise" className="nav-link" >
            <span><b>Experties</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Expertiselevel" className="nav-link" >
            <span><b>Experties Level</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Education" className="nav-link" >
            <span><b>Education</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Employment" className="nav-link" >
            <span><b>Employment</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Language" className="nav-link" >
            <span><b>Language</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Hourly_Rate" className="nav-link" >
            <span><b>Hourly Rate</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Titleoverview" className="nav-link" >
            <span><b>Title &amp; Overview</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Profilephoto" className="nav-link" >
            <span><b>Profile Photo</b></span>
        </Link>
        </li>
        <br/>
        <li className="nav-item active">
        <Link data-scroll to="/Locationphone" className="nav-link" >
            <span><b>Location &amp; Phone</b></span>
        </Link>
        </li>
   <br/>
   <br/>
   
    </ul>
    {/* End of Sidebar */}
    
          
        {/* End of Topbar */}
        {/* Begin Page Content */}
        
<div className="container-fluid">
  {/* Page Heading */}
  <h4><b>Expertise Level</b></h4>
  <br />
  {/* Content Row */}
  <div className="row">
    {/* Area Chart */}
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <span><b>What is your level of experience in this field?</b></span>
        </div>
        {/* DIVS for dynamic backend databases fetching for tags */}
        <div />
        {/*End of  DIVS for dynamic backend databases fetching for tags*/}
        <div className="card-body">
          <div data-v-77e2359c className="col-lg-4"><div data-v-77e2359c data-test="step-level-2" className="eo-button-box eo-button-box-radio text-xs-left text-md-center p-lg-bottom active"><h3 data-v-77e2359c className="m-xs-top-bottom">
                Intermediate
              </h3> <small data-v-77e2359c className="text-muted">
                I have substantial experience in this field
              </small></div></div>
        </div>
        <div className="row-md-6 bg-light">
          <div className="col-md-6">
          <Link data-scroll to="/Expertise" className="btn btn-primary px-4 " >Previous</Link>
          <Link data-scroll to="/Education" className="btn btn-primary px-4 " >Next</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
      
    );
}
export default Expertiselevel;