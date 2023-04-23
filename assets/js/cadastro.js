let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#isenha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })

  btnConfirm.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#iconfirmSenha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })

  function cadastrar(){
    alert('Cadastro feito com sucesso!')
}

  
