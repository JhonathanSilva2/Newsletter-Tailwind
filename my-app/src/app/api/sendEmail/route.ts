require('dotenv').config();

import { NextResponse } from 'next/server';
import nodemailer, { TransportOptions } from 'nodemailer';

export async function POST(req: any, res: any) {
    try {
        const body = await req.json()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            auth: {
                user: process.env.GMAIL_FROM,
                pass: process.env.GMAIL_PASSWORD
            }
        } as TransportOptions);

        const mailOptions = {
            from: process.env.GMAIL_FROM,
            to: body.emailTO,
            subject: body.subject,
            html: `<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td style="padding: 20px;">
        
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                  <tr>
                    <td style="text-align: center; padding-bottom: 20px;">
                      <h1 style="color: #333;">Alura Newsletter</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #555;">
                      <p>Olá,</p>
                      <p>Obrigado por se cadastrar para receber a Alura Newsletter! Este é apenas um exemplo de projeto realizado em um dos cursos da Alura. Não fazemos parte da equipe da Alura de fato, mas esperamos que você aproveite o exemplo.</p>
                      <p>Fique à vontade para entrar em contato conosco se tiver alguma dúvida.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: center; margin-top: 20px; color: #777;">
                      <p>Atenciosamente,<br>Equipe Alura</p>
                    </td>
                  </tr>
                </table>
        
              </td>
            </tr>
          </table>
            
            `
        };
        console.log(mailOptions);
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: err, status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ status: 200, message: 'Hello World' });
}
