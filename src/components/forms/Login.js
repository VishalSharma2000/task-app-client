import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');

  const onChangeFormFields = (event) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="root">
      <h1 className="header">Login</h1>

      <form action="" method="POST" className="form-group">

        {/* Showing error */}
        {
          error &&
          <div className="form-error">
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
          type="email"
          placeholder="Email"
          name="email"
          value={details.email}
          onChange={onChangeFormFields}
          autoFocus
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
        <button
          className="form-button"
          type="submit"
        >SIGN IN</button>
      </form>

      {/* Other Links */}
      <p className="form-text">Reset <Link to="/reset-password" className="form-link">Password</Link></p>
      <p className="form-text">Don't have account <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;