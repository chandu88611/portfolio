import { createTransport } from "nodemailer";

export const sendMail = async (text) => {
  const transporter = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "298fbc4333eacc",
      pass: "ed8f788f1c1ac4",
    },
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: "aschandan88@gamil.com",
    from: "aschandan888@gmail.com",
    text,
  });
};

 