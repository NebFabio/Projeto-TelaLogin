let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#isenha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', () => {
  let inputSenha = document.querySelector('#iconfirmSenha')

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function cadastrar() {
  let nome = document.getElementById('inome').value;
  let usu = document.getElementById('iusu').value;
  let senha = document.getElementById('isenha').value;
  let confirmSenha = document.getElementById('iconfirmSenha').value;

  if (nome && usu && senha && confirmSenha != 0) {
    alert('Cadastrado com sucesso!')
  } else {
    alert('Ops, faltando dados...')
  }
}