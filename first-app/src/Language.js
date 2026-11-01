import React from 'react'
import {Link} from 'react-router-dom';
function Language(){
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
  <h4><b>Languages</b></h4>
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
        <div className="card-body mb-4">
          <span><b>What is your English proficiency?</b></span><br /><br />
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>English Proficiency</option>
            <option value={1}>Basic</option>
            <option value={2}>Conversational</option>
            <option value={3}>Fluent</option>
            <option value={4}>Native or Bilingual</option>
          </select>
        </div>
        {/* Large modal */}
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"> <b> + Add Language</b></button>
        <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="row-md-12">
                <form>
                  <br />
                  <div>
                    <h3>Add Language</h3>
                  </div>
                  <div className="col-md-12">
                    <b>What other language do you speak?</b>
                    <br /> <br />
                    <span><b>Language</b></span>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option selected>Select Language</option>
                      <option value={1}>Arabic</option>
                      <option value={2}>Chinese</option>
                      <option value={3}>Russian</option>
                      <option value={4}>Persian</option>
                      <option value={5}>Urdu</option>
                    </select>
                  </div>
                  <br /><br />
                  <div className="col-md-12">
                    <b>Proficiency</b>
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option selected>English Proficiency</option>
                      <option value={1}>Basic</option>
                      <option value={2}>Conversational</option>
                      <option value={3}>Fluent</option>
                      <option value={4}>Native or Bilingual</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div className="card-footer py-3 d-flex flex-row align-items-center justify-content-between">
                    <div className="col-md-6 btn-group">
                      <a href="language.html"><button type="button" className="btn btn-primary btn-light btn-block">Cancel</button></a>
                      <a href="language.html"><button type="button" className="btn btn-primary btn-dark btn-block">Save</button></a>     
                    </div>
                  </div>
                  <br /><br />
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card-footer py-3 d-flex flex-row align-items-center justify-content-between">
          <div className="col-md-6">
          <Link data-scroll to="/Employment" className="btn btn-primary px-4 " >Previous</Link>
          <Link data-scroll to="/Hourly_Rate" className="btn btn-primary px-4 " >Next</Link>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  
        </div>  
    );
}
export default Language;