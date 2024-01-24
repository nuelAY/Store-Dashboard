import React, { createContext, useState, useContext } from 'react';

// Create a context with default values
const MenuContext = createContext({
  menuVisible: false,
  setMenuVisible: () => {},
});

// Create a context provider component
export const MenuProvider = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useUserContext = () => useContext(MenuContext);




