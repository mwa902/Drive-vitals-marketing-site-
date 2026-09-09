import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

/**
 * Reusable nodemailer transporter
 * Uses Microsoft 365 SMTP (smtp.office365.com:587 + STARTTLS)
 * which is what UOL student accounts run on.
 */
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST   || "smtp.office365.com",
  port:   Number(process.env.SMTP_PORT)  || 587,
  secure: process.env.SMTP_SECURE === "true", // false → STARTTLS on 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false, // required for some Office 365 tenants
  },
});

/**
 * sendMail(options)
 * Thin wrapper so every controller just calls sendMail({ subject, html })
 *
 * @param {{ to?: string, subject: string, html: string }} opts
 */
export async function sendMail({ to, subject, html }) {
  const mailOptions = {
    from: `"DriveVital" <${process.env.SMTP_USER}>`,
    to:   to || process.env.NOTIFY_EMAIL,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return { ok: true, messageId: info.messageId };
  } catch (err) {
    console.error("❌ Email send failed:", err.message);
    return { ok: false, error: err.message };
  }
}
