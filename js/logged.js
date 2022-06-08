let userLogged = JSON.parse(localStorage.getItem('userLogged'))
let title = document.querySelector('#title')
title.setAttribute('style', 'margin-left: 15px')
title.innerHTML = `Hello <strong id="username">${userLogged.name}</strong>, nice to have you with us!`

if (localStorage.getItem('token') == null){
    alert('Not authenticated user!')
    window.location.href = 'login.html'
}

function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    window.location.href = './index.html'
}

