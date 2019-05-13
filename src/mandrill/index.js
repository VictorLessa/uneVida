const nodemailer = require('nodemailer')

const MailChimp = require('mailchimp-api-v3')

class nodeMailer {
  constructor () {
    console.log(process.env.NOREPLY_HOST)
    this.transporter = nodemailer.createTransport({
      host: process.env.NOREPLY_HOST,
      port: process.env.NOREPLY_PORT,
      secure: process.env.NOREPLY_IS_SECURE, // true for 465, false for other ports
      // autentication
      auth: {
        user: process.env.NOREPLY_EMAIL, // generated ethereal user
        pass: process.env.NOREPLY_PASSWORD// generated ethereal password
      }
    })
    this.mailChimp = new MailChimp('adb50a4fb0f2e8d35fd56d0547a8aa7b-us20')
  }

  async mailChimpLandPage () {
    try {
      await this.mailChimp.post(`/lists/${listID}/members`, {
        email_address: payload,
        status: 'subscribed',
        merge_fields: {
          FNAME: ' ',
          LNAME: ' '
        }
      })
    } catch (error) {

    }

    sendEmail()
  }

  async sendEmail (listID) {
    let message = {
      from: 'Favor Não Responder',
      to: 'victordsgnr@gmail.com',
      subject: 'Message title',
      text: 'Plaintext version of the message',
      html: '<p>tste</p>' ,//'<p>HTML version of the message</p>',
      replyTo: '',
      encoding: ''
    };
    await this.transporter.sendMail(message)
  }
}

const Class = new nodeMailer()

Class.configMail()