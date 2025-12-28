import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const sendMail = async ({ to, subject, text})=>{
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yadav01krishankant@gmail.com",
        pass: process.env.PASSWORD,
    },
    });

    const mailOptions = {
    from: "yadav01krishankant@gmail.com",
    to: to,
    subject: subject,
    text: text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("email sent: "+ info.response);
    } catch(error){
        console.log("error sending mail: ", error);
    }
}