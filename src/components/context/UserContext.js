import React, { useEffect, createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = props => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) setCurrentUser(user);
  }, []);

  const value = {
    currentUser,
    setCurrentUser
  }

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};
