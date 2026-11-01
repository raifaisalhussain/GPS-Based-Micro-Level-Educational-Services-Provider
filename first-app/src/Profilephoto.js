import React from 'react'
import {Link} from 'react-router-dom';
function Profilephoto(){
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
          <div>
{/* Begin Page Content */}
<div className="container-fluid">
  {/* Page Heading */}
  <h4><b>Profile Photo</b></h4>
  <br />
  {/* Content Row */}
  <div className="row">
    {/* Area Chart */}
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        {/* Card Header - Dropdown */}
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h5>Please upload a professional portrait that clearly shows your face:</h5>
        </div>
        {/* DIVS for dynamic backend databases fetching for tags */}
        <div />
        {/*End of  DIVS for dynamic backend databases fetching for tags*/}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"> <b> + Add Profile Photo</b></button>
        <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="row-md-12">
                <form>
                  <br />
                  <div>
                    <h3>Add Profile Photo</h3>
                  </div>
                  <div>
                    <h5>Please upload a professional portrait that clearly shows your face:</h5>
                    <input type="file" id="myfile" name="myfile" /><br /><br />
                    <input type="submit" />
                  </div></form>
                <br />
                <br />
                <div className="card-footer py-3 d-flex flex-row align-items-center justify-content-between">
                  <div className="col-md-6 btn-group">
                    <a href="profilephoto.html"><button type="button" className="btn btn-primary btn-light btn-block">Cancel</button></a>
                    <a href="profilephoto.html"><button type="button" className="btn btn-primary btn-dark btn-block">Save</button></a>     
                  </div>
                </div>
                <br /><br />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer py-3 d-flex flex-row align-items-center justify-content-between">
          <div className="col-md-6">
          <Link data-scroll to="/Profilephoto" className="btn btn-primary px-4 " >Previous</Link>
          <Link data-scroll to="/Locationphone" className="btn btn-primary px-4 " >Next</Link>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  
        </div>
    );
}
export default Profilephoto;