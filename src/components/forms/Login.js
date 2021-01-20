import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });

  const onChangeFormFields = (event) => {
    const { name, value } = event.target;

    setDetails({...details, [name]: value});
  };

  return (
    <div className="root">
      <h1 className="header">Login</h1>
      <form action="" method="POST" className="form-group">
        <input 
          className="form-input"
          type="email" 
          placeholder="Email" 
          name="email"
          value={details.email}
          onChange={onChangeFormFields}
          autoFocus
        /> <br />
        <input 
          className="form-input"
          type="password" 
          placeholder="Password" 
          name="password"
          value={details.password}
          onChange={onChangeFormFields}
        /> <br />
        <button 
          className="form-button"
          type="submit"
        >Login</button>
      </form>
      <p className="form-text">Reset <Link to="#" className="form-link">Password</Link></p>
      <p className="form-text">Don't have account <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;