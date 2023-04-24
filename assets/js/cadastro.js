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

//validação de preenchimento de dados e senhas coincidentes
function cadastrar() {
  let nome = document.getElementById('inome').value;
  let usu = document.getElementById('iusu').value;
  let senha = document.getElementById('isenha').value;
  let confirmSenha = document.getElementById('iconfirmSenha').value;
  
  if ( senha != confirmSenha) {
    alert('[ERRO] As senhas não coincidem!!!') 
  } else {
    if (nome && usu && senha && confirmSenha != 0) {
      alert('Cadastrado(a)!')
    } else {
      alert('Ops, alguns dados precisam serem preenchidos!')
    }
  } 
  
}