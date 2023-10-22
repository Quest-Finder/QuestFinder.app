import { ReactNode } from 'react';

import { AuthProvider } from './AuthContext';
import { ClerkProvider } from './ClerkContext';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ClerkProvider>
      <AuthProvider>{children}</AuthProvider>
    </ClerkProvider>
  );
}
