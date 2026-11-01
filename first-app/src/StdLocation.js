import {Link} from 'react-router-dom';
import React from 'react';
function StdLocation(){
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
  <div className="container-fluid">
  {/* Page Heading */}
  <h4><b>Location, Phone</b></h4>
  <br />
  {/* Content Row */}
  <div className="row">
    {/* Area Chart */}
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h3>Where are you based?</h3>
          <span><p>We take your privacy very seriously. Only your city and country will be shown to clients</p></span>   
        </div>
        {/* DIVS for dynamic backend databases fetching for tags */}
        <div />
        {/*End of  DIVS for dynamic backend databases fetching for tags*/}
        <div className="card-body">
          <span><b>Country</b></span><br /><br />
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="inputtitle" aria-describedby="emailHelp" placeholder />
            <small id="emailHelp" className="form-text text-muted" />
            <br /><br />
            <b><span>Street Address</span></b> <br /><br />
            <input type="text" className="form-control" id="inputoverview" aria-describedby="emailHelp" placeholder />
            <small id="emailHelp" className="form-text text-muted" />
            <br /><br />
            <b><span>City</span></b> <br /><br />
            <input type="text" className="form-control" id="inputoverview" aria-describedby="emailHelp" placeholder />
            <small id="emailHelp" className="form-text text-muted" />
            <br /><br />
            <b><span>ZIP/Postal code</span></b> <br /><br />
            <input type="text" className="form-control" id="inputoverview" aria-describedby="emailHelp" placeholder />
            <small id="emailHelp" className="form-text text-muted" />
            <br /><br />
            <b><span>Phone Number</span></b> <br /><br />
            <input type="text" className="form-control" id="inputoverview" aria-describedby="emailHelp" placeholder="+92 Enter Number" />
            <small id="emailHelp" className="form-text text-muted" />
          </div>
        </div>
        <div className="card-footer py-3 d-flex flex-row align-items-center justify-content-between">
          <div className="col-md-6">
          <Link data-scroll to="/Stdlocation" className="btn btn-primary px-4 " >Previous</Link>
          <Link data-scroll to="/StudentProfile" className="btn btn-primary px-4 " >Save and Go to Dashboard</Link>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  
        </div>
          
    );
}
export default StdLocation;