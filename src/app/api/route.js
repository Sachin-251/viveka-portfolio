import { NextResponse } from 'next/server';

export async function POST(req, res) {
  
  const {name, email, message } = await req.json();

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    secure: true,
  })
  const mailData = {
    from: `Viveka-Portfolio <process.env.NODEMAILER_EMAIL>`,
    to: 'rebekah.251@outlook.com',
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  return NextResponse.json({message: "Mail Sent"}, {status: 200});
}