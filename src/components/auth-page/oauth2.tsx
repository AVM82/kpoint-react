import Button from '@mui/material/Button';
import { useGoogleLogin } from '@react-oauth/google';
import { FC } from 'react';

const OAuth2: FC = () => {
  const login = useGoogleLogin({
    redirect_uri: 'http://localhost:8080/api/auth/oauth2',
    onSuccess: async (response) => {
      // Log the Google login success response
      console.log('Google Login Success:', response);

      // Make a POST request to your backend with the response data
      try {
        const backendResponse = await fetch('http://localhost:8080/api/auth/oauth2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            code: response.code, // Adjust the key and payload structure as needed
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
      <h2>React Google Login</h2>
      <Button onClick={login}>
        Login with Google
      </Button>
    </div>
  );
};

export { OAuth2 };
