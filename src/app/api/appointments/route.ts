// app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {

  const body = await req.json();

  console.log("API Hit");
  console.log("Request body:", body);

  const {
    specialization,
    doctor,
    shift,
    live,
    date,
    request,
  } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Appointment Booking" <${process.env.MAIL_USER}>`,
      to: 'jigishaadatiya21@gmail.com',
      subject: 'New Appointment Booking',
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Selected Specialist:</strong> ${specialization}</p>
        <p><strong>Selected Doctor:</strong> ${doctor}</p>
        <p><strong>Selected Shift:</strong> ${shift}</p>
        <p><strong>Live Consultation:</strong> ${live}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Special Request:</strong> ${request}</p>
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
