import React from 'react'
import {Link} from 'react-router-dom';
function Category(){
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
  <h4><b>Category</b></h4>
  <br />
  {/* Content Row */}
  <div className="row">
    {/* Area Chart */}
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <span><b>Tell us about the work you do!</b></span>
        </div>
        {/* Card Body */}
        <div className="card-body">
          <span><b>What is the main service you offer?</b></span><br /><br />
          <div className="col-md-6">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select a category</option>
              <option value={1}>Accounting &amp; Consulting</option>
              <option value={2}>Customer Service</option>
              <option value={3}>IT &amp; Marketing</option>
              <option value={3}>Web, Mobile &amp; Software Dev</option>
              <option value={3}>Writing</option>
            </select><br /><br /><br />
            <select className="form-select" aria-label="Default select example">
              <option selected>Select a sub-category</option>
              <option value={1}>Database Administration</option>
              <option value={2}>ERP/CRM Software</option>
              <option value={3}>Information Security </option>
              <option value={3}>Desktop developement </option>
              <option value={3}>E-commerce development </option>
              <option value={3}>Game developement </option>
              <option value={3}>Mobile developement </option>
              <option value={3}>QA and testing </option>
              <option value={3}>Ontent and copy writting </option>
              <option value={3}>Technical writting </option>
            </select>
          </div>
        </div>
        <div className="row-md-6 bg-light">
          <div className="col-md-6">
          <Link data-scroll to="/Category" className="btn btn-primary px-4 " >Previous</Link>
            <Link data-scroll to="/Expertise" className="btn btn-primary px-4 " >Next</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    
    );
}
export default Category;