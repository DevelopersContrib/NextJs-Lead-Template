export const ENV_VAR = {
  API_KEY: "API_KEY",
  API_URL: "API_URL",
  NEXT_PUBLIC_VERCEL_URL: "NEXT_PUBLIC_VERCEL_URL",
};

export const EnvironmentStage = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
};

export function getEnvVar(key) {
  switch (key) {
    case ENV_VAR.API_KEY:
      return process.env.API_KEY;
    case ENV_VAR.API_URL:
      return process.env.API_URL;
    case ENV_VAR.NEXT_PUBLIC_VERCEL_URL:
      return process.env.NEXT_PUBLIC_VERCEL_URL;
    default:
      throw new Error(`${key} environment variable not set`);
  }
}
