import React from 'react'
import {Link} from 'react-router-dom';
function Hourly_Rate(){
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
  <h4><b>Hourly Rate</b></h4>
  <br />
  {/* Content Row */}
  <div className="row">
    {/* Area Chart */}
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        </div>
        {/* DIVS for dynamic backend databases fetching for tags */}
        <div />
        {/*End of  DIVS for dynamic backend databases fetching for tags*/}
        <div className="card-body py-3 d-flex flex-row align-items-center justify-content-between">
          <div className="col-md-12">
            <p>Clients will see this rate on your profile and in search results once you publish your profile. You can adjust your rate every time you submit a proposal.</p><br /><br />
          </div> 
        </div>
        <div className="card-body">
          <div className="col-md-12">
            <h4>Hourly Rate</h4>
            <p>Total amount the client will see</p>
            <b>$</b>
            <input type="text" placeholder={0} /> /hr
            <br />
            <br />
          </div>
          <div className="col-md-12">
            <h4>TASKILL Service Fee</h4> 
            <p>Explain this
              The <strong>Taskill Service Fee</strong>  is 20% when you begin a contract with a new client. Once you bill over $500 with your client, the fee will be 10%.
            </p>
            <b>$</b>
            <input type="text" placeholder={0.0} /> /hr
            <br />
            <br />
          </div>
          <h4>You'll receive</h4> 
          <p>
            The estimated amount you'll receive after service fees
          </p>
          <b>$</b>
          <input type="text" placeholder={0.0} /> /hr
          <br />
          <br />
        </div>
      </div>
      <div className="card-footer py-3 d-flex flex-row align-items-center     justify-content-between">
        <div className="col-md-6">
        <Link data-scroll to="/Language" className="btn btn-primary px-4 " >Previous</Link>
        <Link data-scroll to="/Titleoverview" className="btn btn-primary px-4 " >Next</Link>
        
        </div>
      </div>
    </div>
  </div>
</div>


  
        </div>
    );
}
export default Hourly_Rate;