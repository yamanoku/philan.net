import { NextApiResponse } from "next";
import { createOAuthClient } from "../../../api-utils/create-OAuth";
import nextConnect from "next-connect";
import { NextApiRequestWithSession, withSession } from "../../../api-utils/with-session";
import { randomBytes } from "crypto";

const createRandom = () => {
    return randomBytes(40).reduce((p, i) => p + (i % 32).toString(32), "");
};

const handler = nextConnect<NextApiRequestWithSession, NextApiResponse>()
    .use(withSession())
    .get(async (req, res, next) => {
        const uuid = createRandom();
        req.session.authState = uuid;
        // save state and redirect
        req.session.save(() => {
            const client = createOAuthClient();
            const authUrl = client.generateAuthUrl({
                access_type: "offline",
                scope: [
                    "https://www.googleapis.com/auth/spreadsheets",
                    "https://www.googleapis.com/auth/drive", // require to create sheet
                    "openid" // id_token
                ],
                state: uuid
            });
            res.redirect(authUrl);
            next();
        });
    });

export default handler;
