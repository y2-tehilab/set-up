import React, { createContext, useContext } from 'react';
import { RootModel } from './root.model';

const Index = createContext(null);

const StoreProvider = ({ children, store }) => {
  return <Index.Provider value={store}>{children}</Index.Provider>;
};

const useStore = () => {
  const context = useContext(Index);
  if (!context) {
    throw new Error('StoreContext was not provided');
  }

  return context;
};

export { StoreProvider, useStore, RootModel };
