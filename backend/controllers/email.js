import Email from "../models/email.js";
import { sendMail } from "../utils/mailer.js";
import { validateContactInput } from "../utils/validation.js";

export const createEmail = async (req, res) => {
  try {
    const validation = validateContactInput(req.body);
    if (validation.errors.length) {
      return res.status(400).json({
        success: false,
        message: validation.errors[0],
        errors: validation.errors,
      });
    }
    const { fullname, email, company, phonenumber, fleetsize, inquirytype, message } = validation.value;

    /* ── 1. Save to MongoDB ── */
    const newEmail = new Email({
      fullname,
      email,
      company,
      phonenumber,
      fleetsize,
      inquirytype,
      message,
    });
    const saved = await newEmail.save();

    /* ── 2. Send notification email via SMTP ── */
    await sendMail({
      subject: `[DriveVital] New Inquiry — ${inquirytype} from ${company}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f7ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1557e8,#1E6FFF);padding:32px 36px;">
            <h1 style="color:white;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px;">
              New Contact Inquiry
            </h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">
              Received via DriveVital website
            </p>
          </div>

          <div style="padding:32px 36px;background:#ffffff;">
            <table style="width:100%;border-collapse:collapse;">
              ${[
                ["Full Name",    fullname],
                ["Email",        email],
                ["Company",      company],
                ["Phone",        phonenumber],
                ["Fleet Size",   fleetsize || "—"],
                ["Inquiry Type", inquirytype],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:35%;">
                    <span style="font-size:12px;font-weight:700;color:#718096;text-transform:uppercase;letter-spacing:0.06em;">
                      ${label}
                    </span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:14px;color:#0A1628;font-weight:600;">
                      ${value}
                    </span>
                  </td>
                </tr>
              `).join("")}
            </table>

            <div style="margin-top:24px;padding:20px;background:#f4f7ff;border-radius:10px;border-left:4px solid #1E6FFF;">
              <p style="font-size:12px;font-weight:700;color:#718096;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px;">
                Message
              </p>
              <p style="font-size:14px;color:#0A1628;line-height:1.7;margin:0;">
                ${message.replace(/\n/g, "<br/>")}
              </p>
            </div>
          </div>

          <div style="padding:20px 36px;background:#f4f7ff;border-top:1px solid #e2e8f0;">
            <p style="font-size:12px;color:#a0b4cc;margin:0;text-align:center;">
              DriveVital — Fleet Management Platform &nbsp;|&nbsp;
              <a href="mailto:drivevitalsofficial@gmail.com" style="color:#1E6FFF;text-decoration:none;">
                drivevitalsofficial@gmail.com
              </a>
            </p>
          </div>
        </div>
      `,
    });

    /* ── 3. Send confirmation to the user ── */
    await sendMail({
      to: email,
      subject: "We received your message — DriveVital",
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f7ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1557e8,#1E6FFF);padding:32px 36px;">
            <h1 style="color:white;margin:0;font-size:22px;font-weight:800;">
              Thanks, ${fullname.split(" ")[0]}!
            </h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">
              We've received your inquiry and will respond within 2 hours.
            </p>
          </div>
          <div style="padding:32px 36px;background:#ffffff;">
            <p style="font-size:15px;color:#0A1628;line-height:1.7;">
              Hi ${fullname.split(" ")[0]},<br/><br/>
              Your message about <strong>${inquirytype}</strong> for
              <strong>${company}</strong> has been received by our team.
              A DriveVital fleet specialist will be in touch shortly.
            </p>
            <div style="margin-top:28px;text-align:center;">
              <a href="https://drivevital.com" style="display:inline-block;background:#1E6FFF;color:white;padding:13px 32px;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;">
                View DriveVital →
              </a>
            </div>
          </div>
          <div style="padding:20px 36px;background:#f4f7ff;border-top:1px solid #e2e8f0;">
            <p style="font-size:12px;color:#a0b4cc;margin:0;text-align:center;">
              DriveVital · 132-B Ali Akbar Street, Valencia Town, Lahore
            </p>
          </div>
        </div>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully. Check your email for confirmation.",
      data: saved,
    });
  } catch (error) {
    console.error("Error in createEmail:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
      error: error.message,
    });
  }
};
