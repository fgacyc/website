import { google } from "googleapis";
import type { NextApiHandler } from "next";

interface MobileForm {
  name: string;
  phone_number: string;
  location: string;
  comment: string;
  type: string;
}

const handler: NextApiHandler = async (req, res) => {
  if ((req.method = "POST")) {
    const { name, phone_number, location, comment,type } = JSON.parse(
      req.body as string
    ) as MobileForm;
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY!.replace(
            /\\n/g,
            "\n"
          ),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const now = Date.now();

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
        range: "Mobile!A:G",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              `=EPOCHTODATE(${now}, 2)`,
              name,
              phone_number,
              location,
                comment,
                type,
            ],
          ],
        },
      });

      if (response.status === 200)
        return res.status(200).json({ message: "success" });
      if (response.status !== 200)
        return res
          .status(response.status)
          .json({ result: response.statusText });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
};

export default handler;
