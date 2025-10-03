// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // App-specific password
      },
    });

    // Alternative: Using SMTP (more reliable for production)
    // const transporter = nodemailer.createTransporter({
    //   host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
    //   port: 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'larycodes@gmail.com',
      subject: subject || `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
              
              <div style="margin: 20px 0;">
                <strong style="color: #555;">Name:</strong>
                <p style="margin: 5px 0; font-size: 16px; color: #333;">${name}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <strong style="color: #555;">Email:</strong>
                <p style="margin: 5px 0; font-size: 16px; color: #333;">
                  <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                </p>
              </div>
              
              ${subject ? `
                <div style="margin: 20px 0;">
                  <strong style="color: #555;">Subject:</strong>
                  <p style="margin: 5px 0; font-size: 16px; color: #333;">${subject}</p>
                </div>
              ` : ''}
              
              <div style="margin: 20px 0;">
                <strong style="color: #555;">Message:</strong>
                <div style="margin: 10px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #007bff; font-size: 16px; line-height: 1.5; color: #333;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <hr style="margin: 25px 0; border: none; height: 1px; background: #eee;">
              
              <div style="font-size: 14px; color: #666;">
                <strong>Sent on:</strong> ${new Date().toLocaleString()}
              </div>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; background: #333; color: white;">
            <p style="margin: 0; font-size: 14px;">
              This message was sent from your portfolio contact form
            </p>
          </div>
        </div>
      `,
      // Plain text version
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}