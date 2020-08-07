const nodemailer = require('nodemailer')
const SMTP_CONFIG = require('./config/smtp')

const transport = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass
  },
  tls: {
    rejectUnauthorized: false
  }
})

async function sendEmail () {
  const mailSend = await transport.sendMail({
    text: "Texto do e-mail",
    subject: "Assunto do email",
    from: "seu nome  <seu_gmail@gmail.com>",
    to: ['email_1@gmail.com', 'email_2@hotmail.com'],
    html: `
      <html>
        <body>
          <strong>Conteúdo do e-mail</strong>
        </body>
      </html>
    `
  })
}

sendEmail()
