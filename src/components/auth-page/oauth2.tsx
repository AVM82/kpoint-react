import { useGoogleLogin } from '@react-oauth/google';
import { FC } from 'react';
import GoogleButton from 'react-google-button';

const OAuth2: FC = () => {

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
        console.log('Backend Response:', backendData);
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
