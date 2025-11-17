import { Resend } from 'resend';

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, service, message' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'; // Fallback for testing
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!toEmail) {
    console.error('RESEND_TO_EMAIL environment variable is not set.');
    return res.status(500).json({ error: 'Server configuration error: Recipient email not set.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Quote Request from ${name} (${service})`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error('Caught error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
