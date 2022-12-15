import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import sanitizeHtml from 'sanitize-html';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ApiBody {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { firstname, lastname, email, message } = req.body as ApiBody;

  try {
    await sgMail.send({
      to: 'micka.pardal@gmail.com',
      from: 'contact@sensation-kizomba.fr',
      subject: 'formulaire contact site',
      html: `<p><strong>Nom Prénom :</strong> ${sanitizeHtml(
        lastname,
      )} ${sanitizeHtml(
        firstname,
      )}</p><p><strong>Email :</strong>${sanitizeHtml(
        email,
      )}</p><p><strong>Message :</strong>${sanitizeHtml(message)}</p>`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `sendgrid error: ${error?.toString() ?? 'unknown'}` });
  }

  return res.status(200).json({ ok: true });
}

export default sendEmail;
