import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import useProfile from '../hooks/useProfile';

type User = {
  name: string
  id: string
  position: string
  avatar: string
};

type UserContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext debe ser utilizado dentro de un UserProvider');
  }
  return context;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const profile = useProfile();

    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (profile) {
            setUser(profile)
        }
    }, [profile])
    
    
    // const initialState: User = {
    //     name: "asd",
    //     id: 123,
    //     position: 'frontend developer',
    // };
    
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};