import React, { useState } from 'react';

const Singup = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const onChangeFormFields = (event) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });
  }; 

  return (
    <div>
      <h1>Sign up</h1>

      <form action="" method="POST">
        <input 
          type="text"
          placeholder="Full Name"
          name="name"
          value={details.name}
          onChangeFormFields={onChangeFormFields}
        />

        <input 
          type="text"
          placeholder="Full Name"
          name="name"
          value={details.name}
          onChangeFormFields={onChangeFormFields}
        />
      </form>
    </div>
  );
};

export default Singup;