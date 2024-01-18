const { APP_API_ORIGIN_URL } = process.env;

const ENV = {
  API_PATH: APP_API_ORIGIN_URL ?? '',
} as const;

export { ENV };
