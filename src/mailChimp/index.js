import axios from 'axios'

export const mailChimpList = async (email) => {
  let config = {
    method: 'post',
    url: `https://us20.api.mailchimp.com/3.0/lists/56550d7972/members`,
    headers: {'Authorization': 'apikey a2b5de670cacf8f1aa3285a7b8edb34d-us20', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    data: {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: ' ',
        LNAME: ' '
      }
    }
  }
  await axios.request(config)
}