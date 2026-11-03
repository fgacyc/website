import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Keep the existing deployment's environment variables and callback URL working.
const domain = process.env.AUTH0_DOMAIN ?? process.env.AUTH0_ISSUER_BASE_URL;

export default new Auth0Client({
  domain: domain?.replace(/^https?:\/\//, "").replace(/\/$/, ""),
  appBaseUrl: process.env.APP_BASE_URL ?? process.env.AUTH0_BASE_URL,
  authorizationParameters: {
    audience: process.env.AUTH0_AUDIENCE,
  },
  signInReturnToPath: "/fga-mobile/account-deletion",
  routes: {
    login: "/api/auth/login",
    logout: "/api/auth/logout",
    callback: "/api/auth/callback",
  },
  noContentProfileResponseWhenUnauthenticated: true,
});
