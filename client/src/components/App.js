import React from 'react';
import Header from './Header';

//No need of helper method or any life cycle state so functional component will work
export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
