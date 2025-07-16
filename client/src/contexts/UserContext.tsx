
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  points: number;
  referralLink: string;
}

interface UserContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  isSignedIn: boolean;
  dashboardOpen: boolean;
  setDashboardOpen: (open: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const signIn = async (email: string, password: string) => {
    // Mock sign-in logic
    console.log('Signing in:', email);
    setUser({
      id: '1',
      email,
      name: 'Sarah Johnson',
      points: 150,
      referralLink: `https://rebellious-spirits.com/ref/${email.split('@')[0]}`
    });
  };

  const signUp = async (email: string, password: string, name: string) => {
    // Mock sign-up logic
    console.log('Signing up:', email, name);
    setUser({
      id: '1',
      email,
      name,
      points: 0,
      referralLink: `https://rebellious-spirits.com/ref/${email.split('@')[0]}`
    });
  };

  const signOut = () => {
    setUser(null);
    setDashboardOpen(false);
  };

  return (
    <UserContext.Provider value={{
      user,
      signIn,
      signUp,
      signOut,
      isSignedIn: !!user,
      dashboardOpen,
      setDashboardOpen
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
