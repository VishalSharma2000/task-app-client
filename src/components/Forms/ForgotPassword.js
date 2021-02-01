import React, { useState } from 'react';

import "./Form.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [formMsg, setFormMsg] = useState({
    error: false,
    msg: ''
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="root">
      <h1 className="header">Reset Password</h1>
      <form className="form-group" onSubmit={onSubmitForm}>

        {
          formMsg.msg &&
          <div className={`form-message ${formMsg.error ? "form-error" : ""}`}>
            <span>{formMsg.msg}</span>
            <span
              className="close-btn"
              onClick={() => setFormMsg({ error: false, msg: '' })}
            >x</span>
          </div>
        }

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          required
          className="form-input"
        /> <br />

        <button
          className="form-button"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;