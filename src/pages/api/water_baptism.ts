import { google } from "googleapis";
import type { NextApiHandler } from "next";

interface WaterBaptismData {
  name_en: string;
  name_cn: string;
  gender: string;
  dob: string;
  ic_no: string;
  phone_no: string;
  pastoral_status: string;
  service_location: string;
  pastoral_team: string;
  cgl_name: string;
  t_shirt_size: string;
}

const handler: NextApiHandler = async (req, res) => {
  if ((req.method = "POST")) {
    const {
      name_en,
      name_cn,
      gender,
      dob,
      ic_no,
      phone_no,
      pastoral_status,
      service_location,
      pastoral_team,
      cgl_name,
      t_shirt_size,
    } = JSON.parse(req.body as string) as WaterBaptismData;
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
        range: "Water Baptism!A:L",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              `=EPOCHTODATE(${now}, 2)`,
              name_en,
              name_cn,
              gender,
              dob,
              ic_no,
              phone_no,
              pastoral_status,
              service_location,
              pastoral_team,
              cgl_name,
              t_shirt_size,
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
