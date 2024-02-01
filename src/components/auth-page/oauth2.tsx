import { useGoogleLogin } from '@react-oauth/google';
import { FC } from 'react';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';

import { StorageKey } from '../../common/enums/app/storage-key.enum';
import { storage } from '../../services/services';

const OAuth2: FC = () => {

  const navigate = useNavigate();

  const login = useGoogleLogin({
    redirect_uri: 'http://localhost:5001/api/auth/oauth2',
    onSuccess: async (response) => {
      try {
        const backendResponse = await fetch('http://localhost:5001/api/auth/oauth2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            code: response.code,
          }),
        });

        if (!backendResponse.ok) {
          throw new Error(`HTTP error! Status: ${backendResponse.status}`);
        }

        const backendData = await backendResponse.json();

        console.log('Backend Response:', backendData.user.roles);
        storage.setItem(StorageKey.USER, JSON.stringify(backendData.user));

        if (backendData.user.roles.includes('GUEST')){
          storage.removeItem(StorageKey.TOKEN);
          navigate('/sign-up');
        }else {
          storage.setItem(StorageKey.TOKEN, JSON.stringify(backendData.token));
          navigate('/');
        }
      } catch (error) {
        console.error('Error making POST request to backend:', error.message);
      }
    },
    flow: 'auth-code',
  });

  return (
    <div>
      <GoogleButton onClick={login} type={'dark'}>
        Login with Google
      </GoogleButton>
    </div>
  );
};

export { OAuth2 };
