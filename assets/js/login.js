let btn = document.querySelector('#verSenha')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#isenha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})