const Axios =  require('axios')
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('RU0Fe65llH9ogd5jywslDA');
class Mandrill {
  async sendEmail () {
    var message = {
      "html": "<p>Example HTML content</p>",
      "text": "Example text content",
      "subject": "example subject",
      "from_email": "victor.lessa@universidadeparavida.com.br",
      "from_name": "Example Name",
      "to": [{
              "email": "victor.lessa@gmail.com",
              "name": "Recipient Name",
              "type": "to"
          }],
      "headers": {
          "Reply-To": "victor.lessa@universidadeparavida.com.br"
      }
    }
    var async = false;
    var ip_pool = "Main Pool";
    var send_at = "11/03/2019";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function (result) {
      console.log(result)
    })
    // let config = {
    //   method: 'post',
    //   url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    //   data : {
    //     key: 'NBoSRI0OpI4ZJ-8odxulbA',
    //     message: {
    //       "html": "<p>Example HTML content</p>",
    //       "text": "Example text content",
    //       "subject": "example subject",
    //       "from_email": "admin@universidadeparavida.com.br",
    //       "from_name": "Example Name",
    //       "to": [
    //           {
    //               "email": "victordsgnr@gmail.com",
    //               "name": "Recipient Name",
    //               "type": "to"
    //           }
    //       ],
    //       "headers": {
    //           "Reply-To": "admin@universidadeparavida.com.br"
    //       },
    //       "async": true,
    //       "ip_pool": "Main Pool",
    //   }
    //   }
    // }
    // return await Axios.request(config).then(success => console.log(success.data)).catch(err => console.log(err))
  }
}

let madrill = new Mandrill()

madrill.sendEmail()