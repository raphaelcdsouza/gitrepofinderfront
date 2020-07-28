import React, { createContext, useContext, useState, useCallback } from 'react';

const GithubAuthContext = createContext({});

export const GithubAuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setUserData = useCallback((access_token, user) => {
    setData({
      access_token,
      user,
    });
  }, []);

  return (
    <GithubAuthContext.Provider value={{ user: data.user, access_token: data.access_token, setUserData }}>
      { children }
    </GithubAuthContext.Provider>
  );
};

export function useGithubAuth() {
  const context = useContext(GithubAuthContext);

  if (!context) {
    throw new Error('useGithubAuth must be used within a GithubAuthProvider');
  }

  return context;
}
