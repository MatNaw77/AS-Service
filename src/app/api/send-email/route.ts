// pages/api/send-email.ts
import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

interface Payload {
  name: string;
  email: string;
  phoneNumber: string;
  factory: string;
  address: string;
  machineType: string;
  yearProduction: string;
  winNumber: string;
  description: string;
}

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const payload: Payload = await req.json();
    const emailText = `Pan ${payload.name} zgłosił awarię: ${payload.machineType} w miejscu: ${payload.address}. \nNumer telefonu: ${payload.phoneNumber},\nAdres email: ${payload.email}.\nDane dotyczące maszyny:\nRok produckji: ${payload.yearProduction},\nTyp: ${payload.machineType},\nMarka: ${payload.factory},\nNumer WIN: ${payload.winNumber}.\nOpis usterki:\n${payload.description}`

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_GMAIL,
        pass: process.env.NEXT_GMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.NEXT_GMAIL,
      to: 'mateusz.nawrat@icloud.com',
      subject: `Awaria ${payload.name}`,
      text: emailText,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}
