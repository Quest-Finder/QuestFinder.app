import { ClerkProvider as ClerkProviderLib } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { ReactNode } from 'react';

type ClerkProviderProps = {
  children: ReactNode;
};

export function ClerkProvider({ children }: ClerkProviderProps) {
  const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {}
    },
  };

  if (!CLERK_KEY) {
    throw Error('Invalid Clerk Publishable Key.');
  }

  return (
    <ClerkProviderLib publishableKey={CLERK_KEY} tokenCache={tokenCache}>
      {children}
    </ClerkProviderLib>
  );
}
