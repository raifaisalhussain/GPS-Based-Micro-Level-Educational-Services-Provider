import {Link} from 'react-router-dom';
import React from 'react'
function LogIn(){


  {
      alert("submited");
  }


    return(
        <div>
             <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-2 d-none d-lg-block " />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                       
                        <Link data-scroll to="/Category" className="btn btn-primary btn-user btn-block" >LOG IN</Link>
                        <Link data-scroll to="/Studentedulevel" className="btn btn-primary btn-user btn-block" >LOG IN Student</Link>
                       
                        <hr />
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw" /> Login with Google
                        </a>
                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                      <Link data-scroll to="/ForgetPassword" className="text-center" >
                         Forgot Password </Link>
                      </div>
                      <div className="text-center">
                      <Link data-scroll to="/Register" className="text-center" >
                         Create an Account </Link>
                      </div>
                    </div>
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
export default LogIn;