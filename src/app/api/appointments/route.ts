// app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {


  const body = await req.json();

  console.log("API Hit");
  console.log("Request body:", body);

  const {
    specialist,
    doctor,
    shift,
    consultationType,
    date,
    specialRequest,
  } = body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Appointment Booking" <${process.env.MAIL_USER}>`,
      to: 'info@emphasissoft.com',
      subject: 'New Appointment Booking',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Specialist:</strong> ${specialist}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Shift:</strong> ${shift}</p>
        <p><strong>Consultation Type:</strong> ${consultationType}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Special Request:</strong> ${specialRequest}</p>
      `,
    });

    // Add this log to see the email sending result
    console.log("Email status:", info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
