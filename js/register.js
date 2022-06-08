
// VARIÁVEIS DO ÍCONE DE OLHO NAS LABELS DE SENHA QUE ALTERNAM O TYPE DO INPUT
let btn = document.querySelector('#seePassword')
let btnConfirm = document.querySelector('#seePasswordConfirm')

// VARIÁVEIS DOS CAMPOS DE CADASTRO E SUAS RESPECTIVAS LABELS
let name = document.querySelector('#name')
let labelName = document.querySelector('#labelName')

let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')

let password = document.querySelector('#password')
let labelPassword = document.querySelector('#labelPassword')

let confirmPassword = document.querySelector('#confirmPassword')
let labelConfirmPassword = document.querySelector('#labelConfirmPassword')

//VARRIÁVEIS BOOLEANAS PARA VALIDAR SE OS CAMPOS FORAM PREENCHIDOS
let boolName = false
let boolUser = false
let boolPassword = false
let boolConfirmPassword = false

//VARIÁVEIS DAS MENSAGENS DE SUCESSO E ERRO
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

name.addEventListener('keyup', ()=>{
    if (name.value.length <= 2) {
        labelName.setAttribute('style', 'color: #ad2424;')
        labelName.innerHTML = 'Name *Insert at least 3 characters'
        name.setAttribute('style', 'border-color: #ad2424;')
        boolName = false
    } else{
        labelName.setAttribute('style', 'color: #00243f ')
        labelName.innerHTML = 'Name'
        name.setAttribute('style', 'border-color: #034475;')
        boolName = true
    }
})

user.addEventListener('keyup', ()=>{
    if (user.value.length <= 4) {
        labelUser.setAttribute('style', 'color: #ad2424;')
        labelUser.innerHTML = 'Username *Insert at least 5 characters'
        user.setAttribute('style', 'border-color: #ad2424;')
        boolUser = false
    } else{
        labelUser.setAttribute('style', 'color: #00243f ')
        labelUser.innerHTML = 'Username'
        user.setAttribute('style', 'border-color: #034475;')
        boolUser = true
    }
})

password.addEventListener('keyup', ()=>{
    if (password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: #ad2424;')
        labelPassword.innerHTML = 'Password *Insert at least 6 characters'
        password.setAttribute('style', 'border-color: #ad2424;')
        boolPassword = false
    } else{
        labelPassword.setAttribute('style', 'color: #00243f ')
        labelPassword.innerHTML = 'Password'
        password.setAttribute('style', 'border-color: #034475;')
        boolPassword = true
    }
})
confirmPassword.addEventListener('keyup', ()=>{
    if (confirmPassword.value !== password.value) {
        labelConfirmPassword.setAttribute('style', 'color: #ad2424;')
        labelConfirmPassword.innerHTML = "Passwords don't match!"
        confirmPassword.setAttribute('style', 'border-color: #ad2424;')
        boolConfirmPassword = false
    } else{
        labelConfirmPassword.setAttribute('style', 'color: #00243f ')
        labelConfirmPassword.innerHTML = 'Enter Password Again'
        confirmPassword.setAttribute('style', 'border-color: #034475;')
        boolConfirmPassword = true
    }
})




function signUp(){
    if(boolName && boolUser && boolPassword && boolConfirmPassword){
        let usersList = JSON.parse(localStorage.getItem('usersList') || '[]')

        usersList.push(
        {
            nameRe: name.value,
            userRe: user.value,
            passwordRe: password.value
        })
        
        localStorage.setItem('usersList', JSON.stringify(usersList))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Success! Registered User</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = './index.html'
        }, 3000)
        
    } else {


        
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>There are blank or incorrectly filled fields</strong>'
        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''
    }
}

btn.addEventListener('click', ()=>{
    let inputPassword = document.querySelector('#password')
    let seePassword = document.querySelector('#seePassword')

    if (inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type', 'text')
        seePassword.setAttribute('class','fa fa-eye-slash')
    } else {
        inputPassword.setAttribute('type', 'password')
        seePassword.setAttribute('class','fa fa-eye')
    }
})

btnConfirm.addEventListener('click', ()=>{
    let inputPasswordConfirm = document.querySelector('#confirmPassword')
    let seePasswordConfirm = document.querySelector('#seePasswordConfirm')

    if (inputPasswordConfirm.getAttribute('type') == 'password'){
        inputPasswordConfirm.setAttribute('type', 'text')
        seePasswordConfirm.setAttribute('class','fa fa-eye-slash')
    } else {
        inputPasswordConfirm.setAttribute('type', 'password')
        seePasswordConfirm.setAttribute('class','fa fa-eye')
    }
})


