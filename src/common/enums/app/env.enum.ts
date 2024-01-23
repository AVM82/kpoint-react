const { REACT_APP_API_PATH } = process.env;

const ENV = {
  API_PATH: REACT_APP_API_PATH ?? '',
} as const;

export { ENV };
