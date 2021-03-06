import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setAuthAxios } from '../../services/axios/authAxios';
import { loginWithEmailAndPassword } from '../../services/user/auth';
import Captcha from '../Captcha/Captcha';

import './Form.css';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');
  const history = useHistory();
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    let user = window.localStorage.getItem('user');

    if (user) {
      user = JSON.parse(user);
      setAuthAxios(user.token);
      setCurrentUser(user);
      history.push('/');
    }
  }, []);

  const onChangeFormFields = (event) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    // axios.post('/users/auth/login', { ...details })

    loginWithEmailAndPassword(details.email, details.password)
      .then(response => {
        let { data } = response;
        setAuthAxios(data.token);
        setCurrentUser(data); // updating the context state.

        history.push('/');
      })
      .catch(err => {
        console.log('This isi error', err)
        setError(err.response.data.message);
        setDetails({ email: '', password: '' });
      });
  };

  return (
    <div className="root">
      <h1 className="header">Login</h1>

      <form className="form-group" onSubmit={onSubmitForm}>

        {/* Showing error */}
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

        <Captcha />

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