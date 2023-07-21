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
  let msg = document.getElementById('msg')
  
  if ( senha != confirmSenha) {
    msg.innerHTML = 'As senhas não coincidem!!'
    msg.style.display = 'block'
    msg.style.color = 'black'
    msg.style.backgroundColor = 'rgba(255, 0, 0, 0.500)'
  } else {
    if (nome && usu && senha && confirmSenha != 0) {
      msg.innerHTML = 'Success!'
      msg.style.display = 'block'
      msg.style.backgroundColor = 'rgba(0, 255, 0, 0.200)'
    } else {
      msg.innerHTML = 'Preencha todos os campos para prosseguir!'
      msg.style.display = 'block'
      msg.style.color = 'black'
      msg.style.backgroundColor = 'rgba(255, 0, 0, 0.500)'
    }
  } 

  
}

/*
colinha caso der merd4 o codigo
if ( senha != confirmSenha) {
    msg.innerHTML = 'As senhas não coincidem!!'
    msg.style.display = 'block'
    msg.style.color = 'black'
    msg.style.backgroundColor = 'rgba(255, 0, 0, 0.500)'
  } else {
    if (nome && usu && senha && confirmSenha != 0) {
      msg.innerHTML = 'Cadastrado(a)!'
      msg.style.display = 'block'
      msg.style.backgroundColor = 'rgba(0, 255, 0, 0.200)'
    } else {
      msg.innerHTML = 'Preencha todos os campos para prosseguir!'
      msg.style.display = 'block'
      msg.style.color = 'black'
      msg.style.backgroundColor = 'rgba(255, 0, 0, 0.500)'
    }
  } 
 */