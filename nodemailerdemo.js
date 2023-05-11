const nodeMailer= require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: "joemanny.dev@gmail.com",
        pass: "iuubozoqbifbkcza",
    }
});

const mailOptions = {
    from: "joseph.emmauel@outlook.com",
    to: "joemanny.dev@gmail.com",
    subject: "test 1",
    text: "  a test email from nodejs",
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent: " + info.response);
    }
}
);