import React, { createContext, useState } from 'react';

export const AppDataContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedRange, setSelectedRange] = useState('Today');

  return (
    <AppDataContext.Provider value={{ selectedRange, setSelectedRange,}}>
      {children}
    </AppDataContext.Provider>
  );
};
