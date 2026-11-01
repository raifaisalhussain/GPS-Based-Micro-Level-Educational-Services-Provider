
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [role, setRole] = React.useState("tutor");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Use a password of at least 8 characters.");
      return;
    }

    setLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/${role}/api/register/`;
      await axios.post(endpoint, {
        fullname: name.trim(),
        email: email.trim(),
        password,
      });
      setMessage("Registration submitted successfully.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      const details = error.response?.data;
      if (details?.email) {
        setErrorMessage("Please check your email address. It may already be registered.");
      } else if (details?.password) {
        setErrorMessage("Please choose a stronger password.");
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block" />
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h2 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="text"
                      aria-label="Full Name"
                      placeholder="Full Name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      maxLength={100}
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control form-control-user"
                      type="email"
                      aria-label="Email Address"
                      placeholder="Email Address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        className="form-control form-control-user"
                        type="password"
                        aria-label="Password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        minLength={8}
                        autoComplete="new-password"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control form-control-user"
                        type="password"
                        aria-label="Repeat Password"
                        placeholder="Repeat Password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                  <fieldset className="form-group">
                    <legend className="h5">Select Your Account Type</legend>
                    <label htmlFor="role-tutor" className="mr-3">
                      <input
                        id="role-tutor"
                        type="radio"
                        name="role"
                        value="tutor"
                        checked={role === "tutor"}
                        onChange={() => setRole("tutor")}
                      />{" "}As a Teacher
                    </label>
                    <label htmlFor="role-student">
                      <input
                        id="role-student"
                        type="radio"
                        name="role"
                        value="student"
                        checked={role === "student"}
                        onChange={() => setRole("student")}
                      />{" "}As a Student
                    </label>
                  </fieldset>
                  {errorMessage && <p role="alert" className="text-danger">{errorMessage}</p>}
                  {message && <p role="status" className="text-success">{message}</p>}
                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register Account"}
                  </button>
                </form>
                <hr />
                <div className="text-center">
                  <Link to="/LogIn">Already have an account? Login!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
