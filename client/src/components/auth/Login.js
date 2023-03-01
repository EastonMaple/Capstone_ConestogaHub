import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

// We destructure the login function and the isAuthenticated property from the props object
const Login = ({ login, isAuthenticated }) => {
  // The component uses the useState hook to set the initial state of the form data to an empty object.
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // We destructure the email and password properties from the formData object.
  const { email, password } = formData;

  // The onChange function updates the state of the form data.
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // The onSubmit function calls the login function and passes in the email and password.
  const onSubmit = (e) => {
    // The preventDefault method prevents the default action of the event from happening.
    e.preventDefault();
    login(email, password);
  };

  // If the user is authenticated, the component redirects the user to the dashboard.
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  // The component returns the login form.
  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

// We define the propTypes for the component.
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

// We map the state to the props of the component.
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

// We export the component and connect it to the Redux store.
export default connect(mapStateToProps, { login })(Login);
