import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { name, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"Contact Form" <${process.env.MAIL_USER}>`,
            to: 'care@mchhospital.com',
            subject: subject,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        console.log("Email sent:", info);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending contact email:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
