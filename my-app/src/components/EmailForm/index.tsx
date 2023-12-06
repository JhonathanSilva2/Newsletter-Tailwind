'use client'
require('dotenv').config();
import { useState } from "react";
export default function EmailForm() {
    const [emailTO, setEmailTO] = useState('jhomjom@gmail.com')
    const [apiStauts, setApiStauts] = useState(false)

    const sendMail = async () => {
        console.log('sendMail')

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ emailTO, subject: 'Alura NewsLetter', }),
            });

            if (response.ok) {
                setApiStauts(true)
                console.log('Email sent successfully');
                // Handle success as needed
            } else {
                setApiStauts(false)
                console.error('Failed to send email');
                // Handle failure as needed
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error as needed
        }
    };

    return (
        <form>
            <label className="text-sm w-full font-bold text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
                value={emailTO}
                onChange={(e) => { setEmailTO(e.target.value) }}
                className="text-sm w-full mb-4 pl-3 py-2 rounded border shadow focus:outline-none hover:border-azul-claro hover:ring-azul-escuro focus:border-azul-escuro focus:ring-1 focus:ring-azul-escuro"
                id="email"
                type="email"
                placeholder="Digite seu endereço de email" />
            <button onClick={sendMail} className="font-bold text-white bg-azul-escuro w-full py-2 rounded-full shadow-2xl hover:bg-azul-hover duration-150" type="button">Inscreva-se</button>
            <i>
                <section className={`text-md text-center text-black font-bold p-2  justify-center items-center ${apiStauts ? 'flex' : 'hidden'} `}>Email cadastrado com <section className="text-lime-400 mx-2">sucesso</section>! </section>
            </i>
        </form>
    )
}