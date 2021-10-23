import { useState } from 'react';

export default function useAuth() {
  const getUserAuthentication = () => {
    const isAuthenticated = localStorage.getItem('isUserAuthenticated');
    return JSON.parse(isAuthenticated);
  };

  const [isUserAuthenticated, setUserAuthenticated] = useState(getUserAuthentication());

  const saveUserAuthentication = auth => {
    localStorage.setItem('isUserAuthenticated', JSON.stringify(auth));
    setUserAuthenticated(auth);
  };

  return {
    setUserAuthentication: saveUserAuthentication,
    isUserAuthenticated
  }
}