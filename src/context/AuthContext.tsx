import { useAuth, useUser } from '@clerk/clerk-expo';
import { ReactNode, createContext, useEffect, useState } from 'react';

// TODO: Caso seja necessário adicionar mais alguma informação do usuário
type UserDTO = {
  id: string;
  email: string | undefined;
  fullName: string | null;
  avatar: string;
};

type AuthContextDataProps = {
  user: null | UserDTO;
  signOut: () => Promise<void>;
  isLoaded: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO | null>(null);
  const { signOut: clerkSignOut } = useAuth();
  const { user: clerkUser, isLoaded } = useUser();

  async function signOut() {
    try {
      await clerkSignOut();
    } catch (error) {
      throw Error(`Error: ${error}`);
    }
  }

  useEffect(() => {
    if (clerkUser?.id && clerkUser.primaryEmailAddress && clerkUser.fullName) {
      setUser({
        id: clerkUser.id,
        email: clerkUser.primaryEmailAddress.emailAddress,
        fullName: clerkUser.fullName,
        avatar: clerkUser.imageUrl,
      });
    } else {
      setUser(null);
    }
  }, [
    clerkUser?.fullName,
    clerkUser?.id,
    clerkUser?.primaryEmailAddress,
    clerkUser?.imageUrl,
  ]);

  return (
    <AuthContext.Provider
      value={{
        signOut,
        user,
        isLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
