import { useGoogleLogin } from '@react-oauth/google';
import { FC, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';

import { ENV } from '../../common/enums/app/env.enum';
import { StorageKey } from '../../common/enums/app/storage-key.enum';
import { storage } from '../../services/services';

const OAuth2: FC = () => {

  const navigate = useNavigate();
  const redirectUri = window.location.origin;

  const login = useGoogleLogin({
    redirect_uri: redirectUri,
    flow: 'auth-code',
    onSuccess: async (response) => {

      try {
        const backendResponse = await fetch(ENV.API_PATH + '/auth/oauth2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            code: response.code,
            redirectUri: redirectUri,
          }),
        });

        if (!backendResponse.ok) {
          throw new Error(`HTTP error! Status: ${backendResponse.status}`);
        }

        const backendData = await backendResponse.json();

        console.log('Backend Response:', backendData.user.roles);
        storage.setItem(StorageKey.USER, JSON.stringify(backendData.user));

        if (backendData.user.roles.includes('GUEST')) {
          storage.removeItem(StorageKey.TOKEN);
          navigate('/sign-up', { state: { userData: backendData.user } });
        } else {
          storage.setItem(StorageKey.TOKEN, JSON.stringify(backendData.token));
          navigate('/');
        }
      } catch (error) {
        console.error('Error making POST request to backend:', error.message);
      }
    },
  });

  useEffect(() => {
    login();
  }, [login]);

  return (
    <div>
      <GoogleButton onClick={login} type={'dark'}>
        Login with Google
      </GoogleButton>
    </div>
  );
};

export { OAuth2 };
