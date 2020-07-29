import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

const GithubAuthContext = createContext({});

export const GithubAuthProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setUserData = useCallback(async (code) => {
    try {
      const response = await api.post('http://localhost:3333/github-authenticate', {
        code,
      });

      setData(response.data);
    } catch(err) {
      console.log(err);
    }
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
