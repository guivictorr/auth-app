import React, { createContext, useCallback, useState } from 'react';
import api from '../service/api';

interface User {
  name: string;
  email: string;
  id: string;
  created_at: Date | string;
}

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  token: string;
  user: User;
}

interface ContextProps {
  user: User;
  token: string;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(() => {
    const token = localStorage.getItem('UserToken');
    const user = localStorage.getItem('UserData');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as UserData;
  });

  const signIn = useCallback(async (credentials: Credentials) => {
    const { data } = await api.post('session', credentials);
    const { token, user } = data;

    localStorage.setItem('UserToken', token);
    localStorage.setItem('UserData', JSON.stringify(user));

    setUserData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('UserToken');
    localStorage.removeItem('UserData');
    setUserData({} as UserData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, token: userData.token, user: userData.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
