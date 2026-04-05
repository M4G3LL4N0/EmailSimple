'use client';

import { Session } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  isAuthenticated: false,
  isLoading: true,
});

export function AuthProvider({ 
  children,
  session: initialSession
}: { 
  children: React.ReactNode;
  session: Session | null;
}) {
  const [session, setSession] = useState(initialSession);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSession(initialSession);
    setIsLoading(false);
  }, [initialSession]);

  return (
    <AuthContext.Provider value={{ 
      session,
      isAuthenticated: !!session,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
