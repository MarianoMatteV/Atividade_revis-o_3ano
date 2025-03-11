// LISTAR CARRO

document.addEventListener("DOMContentLoaded", () => {
    listarCarros();
  });
  
  async function listarCarros() {
    const response = await fetch('http://localhost:3001/listarCarros');
    const data = await response.json();
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
  
    data.carro.forEach(carro => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${carro.marca}</td>
            <td>${carro.modelo}</td>
            <td>${carro.placa}</td>
            <td>${carro.cpf}</td>
            <td>${carro.vaga_preferencial}</td>
            <td>
                <button id="remover" onclick="excluir('${carro.placa}')">Excluir</button>
            </td>
            <td>
               <button id="editar" onclick="abrirModal('${carro.marca}', '${carro.modelo}', '${carro.placa}', '${carro.cpf}', '${carro.vaga_preferencial}')">Editar</button>
  
  
            </td>
        `;
        tbody.appendChild(row);
    });
  }
  
  // Excluir
  
  async function excluir(placa) {
    const response = await fetch(`http://localhost:3001/deletar/${placa}`, {
        method: 'DELETE'
    });
  
    const result = await response.json();
    if (result.success) {
        alert('Carro removido da vaga com sucesso!');
        listarCarros(); // Recarrega a lista após a exclusão
    } else {
        alert(result.message || 'Erro ao remover carro da vaga.');
    }
  }
  
  // MODAL
  
  // Função para abrir o modal e preencher os campos
  function abrirModal(marca, modelo, placa, cpf, vaga) {
    document.getElementById('marca').value = marca;
    document.getElementById('modelo').value = modelo;
    document.getElementById('placa').value = placa;
    document.getElementById('cpf').value = cpf;
    document.getElementById('vaga').value = vaga;
  
    // Exibir o modal
    document.getElementById('modal').style.display = 'block';
  
    
  }
  
  // Função para fechar o modal
  function fecharModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // EDITAR - ARRUMAR!!!
  
  // Função para editar os dados do carro
//   async function editarCarro() {
//     const marca = document.getElementById('marca').value;
//     const modelo = document.getElementById('modelo').value;
//     const placaNova = document.getElementById('placa').value;
//     const cpf = document.getElementById('cpf').value;
//     const vaga_preferencial = document.getElementById('vaga').value;
  
//     console.log('Dados enviados:', { marca, modelo, placaNova, cpf, vaga_preferencial });
  
//     const response = await fetch(`http://localhost:3001/editar/${placa}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({marca, modelo, placaNova, cpf, vaga_preferencial })
//     });
  
//     const result = await response.json();
//     if (result.success) {
//         alert('Informações do carro editadas com sucesso!');
//         listarCarros(); // Recarrega a lista após a edição
//         fecharModal(); // Fecha o modal
//     } else {
//         alert(result.message || 'Erro ao editar informações do carro!');
//     }
//   }

async function editarCarro() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const placa = document.getElementById('placa').value;
    const cpf = document.getElementById('cpf').value;
    const vaga_preferencial = document.getElementById('vaga').value;
  
    console.log('Dados enviados:', { marca, modelo, placa, cpf, vaga_preferencial });
  
    const response = await fetch(`http://localhost:3001/editar/${placa}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({marca, modelo, placa, cpf, vaga_preferencial })
    });
  
    const result = await response.json();
    if (result.success) {
        alert('Informações do carro editadas com sucesso!');
        listarCarros();
        fecharModal();
    } else {
        alert(result.message || 'Erro ao editar informações do carro!');
    }
  }

// document.getElementById("editar").addEventListener("click", async () => {
//     const placa = document.getElementById("placaBusca").value.trim();
//     const placaNova = document.getElementById("placaNova").value.trim();

//     // Verifica se os campos foram preenchidos
//     if (!placa || !placaNova) {
//         alert("Por favor, preencha os dois campos antes de editar.");
//         return;
//     }

//     try {
//         const resposta = await fetch("http://localhost:3001/editar", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ placa, placaNova })
//         });

//         const result = await resposta.json();

//         if (resposta.ok) {
//             alert(result.mensagem);
//         } else {
//             alert(result.mensagem || "Erro ao editar o veículo.");
//         }
//     } catch (erro) {
//         console.error("Erro na requisição:", erro);
//         alert("Erro ao conectar-se ao servidor. Verifique sua conexão.");
//     }
// });