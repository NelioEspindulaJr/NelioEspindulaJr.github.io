# Help for Ukraine
Este é o repositório do trabalho avaliativo do segundo bimestre da matéria de Construção de Software para Web, Universidade de Vila Velha - UVV, Espírito Santo.

# Cabeçalho

**Aluno:** Nélio Espíndula Junior

**Professor:** Ricardo Mendes

**Disciplina:** Construção de Software para Web

**Turma:** CC2M


## Em que consiste o trabalho?
A ideia do trabalho é aplicar os conhecimentos sobre HTML5, CSS3 e, principalmente, JavaScript aprendidos durante este segundo bimestre.

Não estarei detalhando muito sobre o HTML e o CSS, pois não é o foco do nosso trabalho.

# Interface
A interface do meu projeto é a seguinte:

Ao cair na Home do site, na Navbar é possível ver os botões de 'Register' ou 'login'. O interessante é que quando for utilizar o site, que cadastre um usuário e depois faça o login.

![home](https://i.imgur.com/lOy9rhP.png)

> O site, em relação ao conteúdo, está bem incompleto. Porém, apenas para questões de análise de código e estruturação dos arquivos, é suficiente.

# Scripts

## Eu dividi os Scripts em 3 arquivos principais:

* [register.js](js/register.js)
* [login.js](js/login.js)
* [logged.js](js/logged.js)
  
#
## register.Js

O [register.js](js/register.js) é o script responsável por registrar os usuários dentro do Local Storage, nele é também validado as informações do cadastro: **Nome**, **usuário** e **senha**.

```js
//AUTENTICAÇÃO DO NOME (MÍNIMO DE 3 CARACTERES)
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
//AUTENTICAÇÃO DO USUÁRIO (MÍNIMO DE 5 CARACTERES)
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
//AUTENTICAÇÃO DA SENHA (MÍNIMO DE 6 CARACTERES)
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
```
Nessa parte do código eu valido através da propriedade `length` das variáveis que eu declarei no começo do meu código.
E, caso passem pela condição do `if`, eu atribuo à variável do tipo booleana (representada no início do nome das variáveis com 'bool') de validação o valor `true`.

> Não colocarei a declaração das variáveis aqui, pois ocupa muito espaço e ainda é possível visualizá-los no arquivo.

```js
function signUp(){
    if(boolName && boolUser && boolPassword && boolConfirmPassword){
        let usersList = JSON.parse(localStorage.getItem('usersList') || '[]')

        usersList.push(
        {
            nameRe: name.value,
            userRe: user.value,
            passwordRe: password.value
        })
        
        //transformar esse JSON em uma string para ser armazenado no LocalStorage
        localStorage.setItem('usersList', JSON.stringify(usersList))

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Success! Registered User</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        //Redirecionar usuário para página home.

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
```
Em seguida, entra em cena a função `signUp()`. Nela eu crio uma lista, e com a função `JSON.parse` transformo essa lista para o formato `.json` e insiro os valores validados de **nome**, **usuário** e **senha** nessa "lista JSON" e a armazeno no``LocalStorage``. Pronto. Agora os dados cadastrados do usuário já podem ser acessados para fazer login!

Lembrando que os dados só são guardados quando todos os campos do formulário estáo válidos! Ou seja, com sua vaiável booleana = `true.

#

## login.js
O [login.js](js/login.js) é o script responsável por válidar o login do usuário, com base nos dados cadastrados de **usuário** e **senha**.

```js
function logIn(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#labelUser')

    let password = document.querySelector('#password')
    let labelPassword = document.querySelector('#labelPassword')

    let msgError = document.querySelector('#msgError')

    //Lista vazia para receber os dados dos usuários cadastrados
    let usersList = []

    //lista de validação do usuário
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
        window.location.href = './logged.html' // se validado, redireciona para página de usuário logado

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token) //token do usuário.

        localStorage.setItem('userLogged', JSON.stringify(userValidation))

    }else{
        user.setAttribute('style', 'border-color: #ad2424;')
        userLabel.setAttribute('style', 'color: #ad2424;')
        password.setAttribute('style', 'border-color: #ad2424;')
        labelPassword.setAttribute('style', 'color: #ad2424;')
        //mensagem de erro
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Incorrect Password or Username'

        user.focus()
    }

}
``` 
Podemos resumir o script inteiro nessa função `logIn()`, primeiro declaramos duas listas: uma de validação vazia no formato `JSON` e outra vazia para receber os dados cadastrados dos usuários.

Em seguida, através de um `getItem` do local Storage, é armazenado dentro da função os dados cadastrados dos usuários. E, para descobrir se o usuário inseriu algum login e senha que constam registrados, usamos um `forEach()` que passa item por item da nossa lista e verifica se são iguais ou não.

Por fim, se o `forEach()` detectar um usuário e senha iguais aos cadastrados, ele armazena esses valores na lista de validação criada no começo da função e um `if` verifica se os dados batem. Caso sim, mensagem de sucesso, é gerado um `token` de acesso para o usuário e ele é redirecionado para a página de Usuário Logado; Caso não, mensagem de erro na tela.

#
## logged.js
O script [logged.js](js/logged.js) só apresenta uma função importante, que é a de deslogar:

```js
function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogged')
    window.location.href = './index.html'
}
```
É uma função extremamente simples e autodidata. Ela é chamada pelo botão de 'Logout' na tela do Usuário Logado, e o que ela faz é simplesmente apagar a lista de validação do usuário e seu token do localStorage, e redireciona para a página de home do site.
