import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { logoutUser } from '../../services/user/auth';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();

  const onClickLogout = async () => {
    await logoutUser();

    history.push('/login');
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-link">Task App</Link>
        <Link
          to="/login"
          className="navbar-link"
          onClick={onClickLogout}
        >Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;