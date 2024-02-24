import { createContext, useContext, useState } from 'react';
import React from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
