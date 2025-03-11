// CADASTRAR CARRO

async function cadastrar(event) {
    event.preventDefault();

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const placa = document.getElementById('placa').value;
    const cpf = document.getElementById('cpf').value;
    const vaga = document.getElementById('vaga').value;
  
    console.log(marca, modelo, placa, cpf, vaga);
  
    const response = await fetch('http://localhost:3001/carros/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ marca, modelo, placa, cpf, vaga })
    });
  
    const result = await response.json();
  
    if (result.success) {
        alert("Cadastro feito com sucesso");
        // window.location.href = "./";
    } else {
        alert(result.message || "Houve um erro ao cadastrar");
    }
    
    listarVagas()
  
  }

  async function listarVagas() {
    const response = await fetch('http://localhost:3001/vagas/listar');
    const data = await response.json();
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados
    console.log(data);
  
    data.vaga.forEach(vaga => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${vaga.vaga}</td>
  
      `;
      tbody.appendChild(row);
    });
  }
  
  async function acessarLista(event){
    event.preventDefault()
  
    window.location.href = "./listar_carro.html";
  }

  async function acessarEditar(event){
    event.preventDefault()
  
    window.location.href = "./editar.html";
  }