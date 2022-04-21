import React, { useState } from 'react';
import UserContext from './UserContext';
import Routes from '../Routes';



function UserProvider() {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser)
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      <Routes />
    </UserContext.Provider>
  );
};

export default UserProvider;