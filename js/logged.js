let userLogged = JSON.parse(localStorage.getItem('userLogged'))
let title = document.querySelector('#title')

title.innerHTML = `Congrats ${userLogged.name}, you have logged in`

if (localStorage.getItem('token') == null){
    alert('Not authenticate user!')
    window.location.href = './login.html'
}

function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    window.location.href = './index.html'
}

