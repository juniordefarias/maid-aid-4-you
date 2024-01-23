/* aqui na pasta util, armazenamos funções pequenas q resolvem pequenos problemas e q podemos utilizar em varios lugares no nosso projeto */

/* essa é uma função q usa regex para validar um input de email */
export default function isEmailValid(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}