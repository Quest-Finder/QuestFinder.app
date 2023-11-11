import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import { useCallback } from 'react';

import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export type OAuthStrategy =
  | 'oauth_google'
  | 'oauth_facebook'
  | 'oauth_discord'
  | 'oauth_twitch';

WebBrowser.maybeCompleteAuthSession();

const useSignInWithOAuth = (strategyOAuth: OAuthStrategy) => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: strategyOAuth });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        console.log('Não foi possível realizar a autenticação');
      }
    } catch (error) {
      console.error('OAuth error', error);
    }
  }, [startOAuthFlow]);

  return {
    onPress,
  };
};

export { useSignInWithOAuth };
