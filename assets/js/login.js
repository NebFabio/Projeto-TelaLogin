let btn = document.querySelector('#versenha')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#isenha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})