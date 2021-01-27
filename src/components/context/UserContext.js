import React, { useEffect, createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const getUserDetails = () => {
      const user = window.localStorage.getItem('user');
      setCurrentUser(user);
    }

    window.addEventListener('load', getUserDetails);
  }, []);

  const value = {
    currentUser
  }

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};
