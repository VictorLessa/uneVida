import Axios from 'axios'

const axios = Axios.create({
  headers: {
    'Access-Control-Allow-Origin': 'https://despertarparaalma.com.br', 'Content-Type': 'application/json', 'access-control-allow-headers': 'Authorization' }
})

const sendEmail = async (email, password) => {
  let config = {
    method: 'post',
    url: `http://localhost:8081`,
    data: {
      "email_to": "victordsgnr@gmail.com",
      "name_from": "Email Automatico",
      "email_from": "nao-responda@universidadeparavida.com.br",
      "subject": "Novo assunto",
      "body": "<b> BR Tag </b> Corpo do email <br>"
    }
  }
  return axios.request(config)
}

export default {
  sendEmail
}