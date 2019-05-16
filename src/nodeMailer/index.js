const nodemailer = require('nodemailer')

const MailChimp = require('mailchimp-api-v3')

const sendEmail = async () => {
    let message = {
      from: 'admin@universidadeparavida.com.br',
      to: 'victordsgnr@gmail.com',
      subject: 'Message title',
      text: 'Plaintext version of the message',
      html: '<p>tste</p>' ,//'<p>HTML version of the message</p>',
      replyTo: '',
      encoding: ''
    };
    let transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      // autentication
      auth: {
        user: 'admin@universidadeparavida.com.br', // generated ethereal user
        pass: 'uneVida@2019'// generated ethereal password
      }
    })
    await transporter.sendMail(message)
  }

  export default sendEmail