//  import nodeoutlook from "nodejs-nodemailer-outlook";

// export function sendToEmail(dest, message) {
//   console.log(dest, message);
//   nodeoutlook.sendEmail({
//     auth: {
//       user: "route38alex@hotmail.com",
//       pass: "Route@alex",
//     },
//     from: "nour <route38alex@hotmail.com>",
//     to: dest,
//     subject: "Hey you, awesome!",
//     html: message,
//     onError: (e) => console.log(e),
//     onSuccess: (i) => console.log(i),
//   });
// }

import  nodemailer from "nodemailer";

export async function sendToEmail(dest, message) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: "nourhanroutenodejs@gmail.com", // generated ethereal user
      pass: "dkondkitwvytfhne", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `Route Alex 👻" <nourhanroutenodejs@gmail.com>`, // sender address
    to: dest, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: message, // html body
  });
}

