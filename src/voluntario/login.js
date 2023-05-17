const form = document.querySelector("#login-idoso")

console.log(form)

form.addEventListener('click', (event) => {
    const txNome = form.elements.txNome.value;
    const txSenha = form.elements.txSenha.value;
    console.log(txNome)
    console.log(txSenha)

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({txNome, txSenha})
    }).then(response => {
        if(response.ok){
            console.log('Login com sucesso');
        }else{
            console.error('Usuário ou senha incorretos')
        }
    }).catch(error => console.log(error))

})