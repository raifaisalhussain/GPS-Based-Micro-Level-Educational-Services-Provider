import React from 'react'
import {Link} from 'react-router-dom';
function Education(){
    return(
      <div>
         {/* Page Wrapper */}
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
            <a className="nav-link" href="Category.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Category</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="Experties.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Experties</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="Expertiselevel.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Experties Level</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="Education.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Education</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="Employment.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Employment</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="language.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Language</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="hourlyrate.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Hourly Rate</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="title_overview.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Title &amp; Overview</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="profilephoto.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Profile Photo</b></span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="location.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span><b>Location &amp; Phone</b></span></a>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
            {/* Sidebar Message */}
            <div className="sidebar-card">
              <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="" />
              <p className="text-center mb-2"><strong>TASKILL</strong> is packed with premium features, components, and more!</p>
            </div>
          </div></ul>
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
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
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
              <h4><b>Education</b></h4>
              <br />
              {/* Content Row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <span><b>Add the school you attended, areas of study,and degree earned</b></span>
                    </div>
                    {/* DIVS for dynamic backend databases fetching for tags */}
                    <div />
                    {/*End of  DIVS for dynamic backend databases fetching for tags*/}
                    {/* Large modal */}
                    <div className="modal-content">
                      <div className="row-md-12">
                        <form>
                          <br />
                          <div>
                            <h3>Add Education</h3>
                          </div>
                          <div className="col-md-12">
                            <b>School</b>
                            <input type="text" className="form-control" placeholder="Ex: UET Lahore" required />
                          </div>
                          <br /><br />
                          <div className="col-md-12">
                            <b>Area of Study</b>
                            <input type="text" className="form-control" placeholder="Ex: Computer Science" required />
                          </div>
                          <br />
                          <br />
                          <div className="col-md-12">
                            <b>Degree</b>
                            <input type="text" className="form-control" placeholder="Ex: Bachelor's" required />
                          </div>
                          <br /><br />  
                          <div className="col-md-6">
                            <b>Dates Attended</b>
                            <input type="date" className="form-control" placeholder="From" required />
                            <b>To</b>
                            <input type="date" className="form-control" placeholder="To" required />
                          </div>
                          <br /><br />
                          <div className="col-md-12">
                            <b>Description</b>
                            <input type="text" className="form-control" placeholder="description" required />
                          </div>
                          <br />
                          <br />
                          <br /><br />
                        </form>      
                      </div>
                    </div>
                    <br />
                    <div className="row-md-6 bg-light">
                      <div className="col-md-6">
                        <button type="button" className="btn btn-primary ">Previous</button>
                        <button type="button" className="btn btn-primary px-3">Save &amp; Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div></div>
      </div>
    );
}
export default Education;