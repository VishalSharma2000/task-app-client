import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../services/axios/axios';
import { setAuthAxios } from '../../services/axios/authAxios';

import "./Form.css";

// check for all the needed validation before submitting the form
const checkInputValidation = (details) => {
  // check password and confirm password 
  if (details.password !== details.confirmPassword) return "Passwords do not match";
  if (details.password.length < 7) return "Password should be contain more than 6 characters";
};

const Signup = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const onChangeFormFields = (event) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });
  };

  const onClickSubmit = (event) => {
    event.preventDefault();

    let errorVal = checkInputValidation(details);
    if (errorVal) {
      setError(errorVal);
      return;
    }

    let tempObj = details;
    delete tempObj.confirmPassword;

    axios.post('/users/auth/signup', { ...tempObj })
      .then(response => {
        let { data } = response;
        setAuthAxios(data.token);

        history.push('/');
      })
      .catch(err => {
        let { data } = err.response;
        setError(data.message);
      })

  };

  return (
    <div className="root">
      <h1 className="header">Sign up</h1>

      <form action="" method="POST" onSubmit={onClickSubmit}>

        {/* For showing error */}
        {
          error &&
          <div className="form-message form-error">
            <span>{error}</span>
            <span
              className="close-btn"
              onClick={() => setError(null)}
            >
              x</span>
          </div>
        }

        {/* Form inputs */}
        <input
          className="form-input"
          type="text"
          placeholder="Full Name"
          name="name"
          value={details.name}
          onChange={onChangeFormFields}
          required
        /> <br />

        <input
          className="form-input"
          type="email"
          placeholder="Email"
          name="email"
          value={details.email}
          onChange={onChangeFormFields}
          required
        /> <br />

        <input
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          value={details.password}
          onChange={onChangeFormFields}
          required
        /> <br />

        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={details.confirmPassword}
          onChange={onChangeFormFields}
          required
        /> <br />

        <button
          className="form-button"
        >
          SIGN UP
        </button>
      </form>

      {/* Other Links */}
      <span className="form-text">Already have an <Link to="/login">account?</Link></span>
    </div>
  );
};

export default Signup;