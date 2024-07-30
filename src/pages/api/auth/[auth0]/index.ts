/* eslint-disable @typescript-eslint/no-unsafe-argument */

import type { NextApiRequest, NextApiResponse } from "next";
import auth0 from "~/lib/auth0";
// import { ApiError } from "next/dist/server/api-utils";

const audience = process.env.AUTH0_AUDIENCE;
// const scope = process.env.AUTH0_SCOPE;

function getUrls(req: NextApiRequest) {
  const host = req.headers.host;
  const protocol = process.env.VERCEL_URL ? "https" : "http";
  const redirectUri = `${protocol}://${host}/api/auth/callback`;
  const returnTo = `${protocol}://${host}/fga-mobile/account-deletion`;
  const logout = `${protocol}://${host}/`;

  console.log("host", host);
  console.log("protocol", protocol);
  console.log("redirectUri", redirectUri);
  console.log("returnTo", returnTo);
  console.log("logout", logout);
  console.log("audience", audience);
  console.log("auth0 context", auth0);

  return {
    redirectUri,
    returnTo,
    logout,
  };
}

export default auth0.handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { redirectUri } = getUrls(req);
      await auth0.handleCallback(req, res, { redirectUri: redirectUri });
    } catch (error) {
      // @ts-expect-error unknown type due to no types for error
      res.status(error.status || 500).end(error.message);
    }
  },

  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { redirectUri, returnTo } = getUrls(req);

      await auth0.handleLogin(req, res, {
        authorizationParams: {
          audience: audience,
          // scope: scope,
          redirect_uri: redirectUri,
        },
        returnTo: returnTo,
      });
    } catch (error) {
      // @ts-expect-error unknown type due to no types for error
      res.status(error.status || 400).end(error.message);
    }
  },

  async logout(req: NextApiRequest, res: NextApiResponse) {
    const { logout } = getUrls(req);
    await auth0.handleLogout(req, res, {
      returnTo: logout,
    });
  },
});
