import React from 'react';

import './Captcha.css';

const Captcha = () => {
  return (
    <div className="captcha-root">
      <p className="captcha-text">MDKFJD</p>
      <img
        // TODO: image src not working.
        src="../../../public/images/reload.png"
        alt="Reload Captcha"
        className="reload-img"
      />
    </div>
  );
};

export default Captcha;