const { REACT_APP_API_PATH } = process.env;
const { OAUTH2_GOOGLE } = process.env;

const ENV = {
  API_PATH: REACT_APP_API_PATH ?? '',
  OAUTH2_GOOGLE: OAUTH2_GOOGLE ?? '',
} as const;

export { ENV };
