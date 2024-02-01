const { REACT_APP_API_PATH } = process.env;
const { OAUTH2_GOOGLE_CLIENT_ID } = process.env;

const ENV = {
  API_PATH: REACT_APP_API_PATH ?? '',
  // OAUTH2_GOOGLE_CLIENT_ID: OAUTH2_GOOGLE_CLIENT_ID ?? '',
  OAUTH2_GOOGLE_CLIENT_ID: '95773710437-per0n2kjs8v1438vahr6bp0htrka5bvm.apps.googleusercontent.com',

} as const;

export { ENV };
