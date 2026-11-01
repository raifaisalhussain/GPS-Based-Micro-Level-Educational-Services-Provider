import React from 'react';
import {Link} from 'react-router-dom';

function Studentedulevel(){
    return(
      <div id="wrapper">
      {/* Sidebar */}
      <ul className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link data-scroll to="/" className="sidebar-brand d-flex align-items-center justify-content-center " >
         
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">TASKILL</div>
          </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
        <Link data-scroll to="/Category" className="nav-link" >
            <span><b>Education Level</b></span>
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
  <h4><b>Education Level</b></h4>
  <br />
  {/* Content Row */}
  <div className="row">
    {/* Area Chart */}
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <span><b>Complete your Profile Information </b></span>
        </div>
        {/* Card Body */}
        <div className="card-body">
        <span><b>Tell us about Your Education Level!</b></span><br /><br />
          <div className="col-md-6">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Your Level</option>
              <option value={1}>Primary</option>
              <option value={2}>Middle </option>
              <option value={3}>Matric</option>
              <option value={4}>Inter</option>
              <option value={5}>Bechelor</option>
              <option value={6}>Master</option>
            </select><br /><br /><br />
          </div>
        </div>
        <div className="row-md-6 bg-light">
          <div className="col-md-6">
            <Link data-scroll to="/StdProfile" className="btn btn-primary px-4 " >Next</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
}
export default Studentedulevel;