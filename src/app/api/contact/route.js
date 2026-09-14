import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'rabea.elzayate@gmail.com';

    // 1. If SMTP environment variables exist, use Nodemailer
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: parseInt(process.env.SMTP_PORT || '465') === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[Portfolio Contact] ${subject || 'New Contact Form Submission'}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
            <h2 style="color: #8B27F2;">New Portfolio Message Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3>Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-line;">${message}</p>
          </div>
        `,
      });

      return NextResponse.json({ success: true, message: 'Email sent successfully via SMTP!' });
    }

    // 2. Fallback to Web3Forms / Resend API if Key exists
    const web3Key = process.env.WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';
    if (process.env.WEB3FORMS_KEY) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          subject: subject || 'Portfolio Contact Form',
          message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        return NextResponse.json({ success: true, message: 'Message sent via Web3Forms!' });
      }
    }

    // 3. Fallback dev response
    console.log(`[Contact Form Received]
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
Destination: ${recipientEmail}`);

    return NextResponse.json({
      success: true,
      message: 'Message received! (Add SMTP_USER and SMTP_PASS to .env.local to send directly to your email box)',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
