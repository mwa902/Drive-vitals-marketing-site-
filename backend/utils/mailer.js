import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST   || "smtp.office365.com",
  port:   Number(process.env.SMTP_PORT)  || 587,
  secure: process.env.SMTP_SECURE === "true", 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS?.replace(/\s+/g, ""),
  },
  requireTLS: process.env.SMTP_REQUIRE_TLS !== "false",
  tls: { rejectUnauthorized: true },
});

export async function verifyMailer() {
  await transporter.verify();
  return true;
}

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
