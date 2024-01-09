import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {
  OAuthStrategy,
  useSignInWithOAuth,
} from '../../hooks/useSignInWithOAuth';

type LoginCardProps = {
  name: string;
  oauth_strategy: OAuthStrategy;
};

const LoginCard = ({ name, oauth_strategy }: LoginCardProps) => {
  const { onPress: handleSignIn } = useSignInWithOAuth(oauth_strategy);

  return (
    <TouchableOpacity
      className="bg-gray-400 w-full items-center py-4 rounded-md mb-4"
      activeOpacity={0.7}
      onPress={handleSignIn}
    >
      <Text className="text-white font-semibold text-lg">
        Entrar com {name}
      </Text>
    </TouchableOpacity>
  );
};

export default LoginCard;
