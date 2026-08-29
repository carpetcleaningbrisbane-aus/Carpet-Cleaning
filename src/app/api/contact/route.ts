import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#f4faff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4faff;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,27,49,0.10);">
          
          <!-- Header -->
          <tr>
            <td style="background:#001b31;padding:32px 40px;text-align:center;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#b4ebfd;">Carpet Cleaner Brisbane</p>
              <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;">New Contact Message</h1>
            </td>
          </tr>

          <!-- Intro strip -->
          <tr>
            <td style="background:#e9f6fd;padding:16px 40px;border-bottom:1px solid #d7e4ec;">
              <p style="margin:0;font-size:13px;color:#2d6675;font-weight:600;">
                📩 You have received a new enquiry from the website contact form.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Sender info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4faff;border-radius:12px;border:1px solid #ddeaf2;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 16px 0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#73777e;">Sender Details</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;width:120px;font-size:13px;color:#73777e;font-weight:600;">Full Name</td>
                        <td style="padding:6px 0;font-size:13px;color:#001b31;font-weight:700;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#73777e;font-weight:600;">Email</td>
                        <td style="padding:6px 0;font-size:13px;color:#001b31;">
                          <a href="mailto:${email}" style="color:#0094B8;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#73777e;font-weight:600;">Phone</td>
                        <td style="padding:6px 0;font-size:13px;color:#001b31;">${phone}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:13px;color:#73777e;font-weight:600;">Service</td>
                        <td style="padding:6px 0;">
                          <span style="background:#b4ebfd;color:#001b31;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">${service}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px 0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#73777e;">Message</p>
              <div style="background:#f4faff;border-left:4px solid #0094B8;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:28px;">
                <p style="margin:0;font-size:14px;color:#001b31;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</p>
              </div>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background:#001b31;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;text-decoration:none;letter-spacing:0.5px;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4faff;border-top:1px solid #ddeaf2;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#73777e;">
                Carpet Cleaner Brisbane &nbsp;·&nbsp; <a href="mailto:binodstha060@gmail.com" style="color:#0094B8;text-decoration:none;">binodstha060@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"Carpet Cleaner Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact: ${name} — ${service}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
