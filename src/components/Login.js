import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Login</h1>
      <form action="" method="POST">
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={details.email}
          onChange={onChangeFormFields}
        /> <br />
        <input 
          type="password" 
          placeholder="Password" 
          name="password"
          value={details.password}
          onChange={onChangeFormFields}
        /> <br />
        <button 
          type="submit"
        >Login</button>
      </form>
      <p>Don't have account <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;