async function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    const data = {nome,senha,cpf};


    const response = await fetch('http://localhost:3001/usuario/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    console.log(results);

    if(results.success) {
        window.location.href = "login.html"
        alert(results.message)
    } else {
        alert(alert.message)
    }
}