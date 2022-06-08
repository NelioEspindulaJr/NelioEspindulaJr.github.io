let btn = document.querySelector('.fa-eye')

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

function logIn(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#labelUser')

    let password = document.querySelector('#password')
    let labelPassword = document.querySelector('#labelPassword')

    let msgError = document.querySelector('#msgError')

    let usersList = []

    let userValidation = {
        name: '',
        user: '',
        password: ''
    }

    usersList = JSON.parse(localStorage.getItem('usersList'))
    
    usersList.forEach((item) =>{
        if (user.value == item.userRe && password.value == item.passwordRe){
            
            userValidation = {
                name: item.nameRe,
                user: item.userRe,
                password: item.passwordRe
            }
        }
    })

    if (user.value == userValidation.user && password.value == userValidation.password){
        window.location.href = './logged.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogged', JSON.stringify(userValidation))

    }else{
        user.setAttribute('style', 'border-color: #ad2424;')
        userLabel.setAttribute('style', 'color: #ad2424;')
        password.setAttribute('style', 'border-color: #ad2424;')
        labelPassword.setAttribute('style', 'color: #ad2424;')

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Incorrect Password or Username'

        user.focus()
    }

}

