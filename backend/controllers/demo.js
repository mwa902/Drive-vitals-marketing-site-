import Demo from "../models/demo.js";
import { sendMail } from "../utils/mailer.js";

export const createDemo = async (req, res) => {
  try {
    const { company, phonenumber, email, description } = req.body;

    if (!company || !phonenumber || !email || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    /* ── 1. Save to MongoDB ── */
    const demo = new Demo({ company, phonenumber, email, description });
    const saved = await demo.save();

    /* ── 2. Notify DriveVital team ── */
    await sendMail({
      subject: `[DriveVital] New Demo Request — ${company}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f7ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#059669,#0891b2);padding:32px 36px;">
            <h1 style="color:white;margin:0;font-size:22px;font-weight:800;letter-spacing:-0.5px;">
              New Demo Request
            </h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">
              Received via DriveVital website — Book a Demo modal
            </p>
          </div>

          <div style="padding:32px 36px;background:#ffffff;">
            <table style="width:100%;border-collapse:collapse;">
              ${[
                ["Company",  company],
                ["Email",    email],
                ["Phone",    phonenumber],
              ].map(([label, value]) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:35%;">
                    <span style="font-size:12px;font-weight:700;color:#718096;text-transform:uppercase;letter-spacing:0.06em;">
                      ${label}
                    </span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
                    <span style="font-size:14px;color:#0A1628;font-weight:600;">${value}</span>
                  </td>
                </tr>
              `).join("")}
            </table>

            <div style="margin-top:24px;padding:20px;background:#f0fdf4;border-radius:10px;border-left:4px solid #059669;">
              <p style="font-size:12px;font-weight:700;color:#718096;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 8px;">
                Why they need DriveVital
              </p>
              <p style="font-size:14px;color:#0A1628;line-height:1.7;margin:0;">
                ${description.replace(/\n/g, "<br/>")}
              </p>
            </div>
          </div>

          <div style="padding:20px 36px;background:#f4f7ff;border-top:1px solid #e2e8f0;">
            <p style="font-size:12px;color:#a0b4cc;margin:0;text-align:center;">
              DriveVital — Fleet Management Platform
            </p>
          </div>
        </div>
      `,
    });

    /* ── 3. Confirmation to requester ── */
    await sendMail({
      to: email,
      subject: "Your demo request is confirmed — DriveVital",
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f4f7ff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#059669,#0891b2);padding:32px 36px;">
            <h1 style="color:white;margin:0;font-size:22px;font-weight:800;">
              Demo Request Confirmed!
            </h1>
            <p style="color:rgba(255,255,255,0.75);margin:6px 0 0;font-size:13px;">
              We'll be in touch within 2 business hours.
            </p>
          </div>
          <div style="padding:32px 36px;background:#ffffff;">
            <p style="font-size:15px;color:#0A1628;line-height:1.7;">
              Hi there,<br/><br/>
              Thanks for requesting a demo for <strong>${company}</strong>.
              One of our fleet specialists will contact you at
              <strong>${phonenumber}</strong> or reply to this email to
              schedule your personalised walkthrough.
            </p>
            <div style="margin-top:28px;text-align:center;">
              <a href="https://drivevital.com" style="display:inline-block;background:#059669;color:white;padding:13px 32px;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;">
                Learn More →
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
      message: "Demo request submitted. Check your email for confirmation.",
      data: saved,
    });
  } catch (error) {
    console.error("Error in createDemo:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
      error: error.message,
    });
  }
};
