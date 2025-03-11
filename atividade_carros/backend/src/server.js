const express = require('express');
const cors = require('cors');
//definir a porta
const porta = 3001;
const app = express();
//habilitar o cors e utilizar json
app.use(cors());
app.use(express.json());
//testar
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));

const connection = require('./db_config');


app.post('/usuario/cadastrar', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.senha,
        request.body.cpf
    );
 console.log(params)
    let query = "INSERT INTO usuario(nome, senha, cpf) values(?,?,?);";
   
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso no cadastro",
                data: results
            })
 
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Erro no cadastro",
                data: err
            })
        }
    })
});


app.post('/usuario/login', (request, response) => {
    let params = Array(
        request.body.cpf,
            // request.body.senha
    );
    let query = "SELECT id,nome,senha,cpf FROM usuario WHERE cpf = ?";
 
    connection.query(query, params, (err, results) => {
        if(results.length > 0) {
            let senhaDigitada = request.body.senha
            let senhaBanco = results[0].senha

            if (senhaBanco === senhaDigitada) {

                response
                    .status(201)
                    .json({
                        success: true,
                        message: "Sucesso",
                        data: results[0]
                })
                
            } else {
                response
                    .status(400)
                    .json({
                    success: false,
                    message: "Verifique sua senha!",
                    data: err
                })
            }

        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "E-mail não cadastrado",
                data: err
            })
        }
       
    })
})



app.post('/carros/cadastrar', (request, response) => {
    let params = Array(
        request.body.marca,
        request.body.modelo,
        request.body.placa,
        request.body.cpf,
        request.body.vaga
    );
 console.log(params)
    let query = "INSERT INTO carros(marca, modelo, placa, cpf, vaga_preferencial) values(?,?,?,?,?);";
   
    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                success: true,
                message: "Sucesso no cadastro do veículo",
                data: results
            })
 
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Erro no cadastro do veículo",
                data: err
            })
        }
    })
});

app.get('/vagas/listar', (req, res) =>{
    let query = "SELECT vaga_preferencial FROM carros";
    connection.query(query, (err, results) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Falha ao buscar carro no estacionamento.' });
        }
        res.json({ success: true, vaga_preferencial: results });
      });
})

app.get('/listarCarros', (req, res) => {
    const query = 'SELECT * FROM carros';
    connection.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Falha ao buscar carro no estacionamento.' });
      }
      res.json({ success: true, carro: results });
    });
})

app.delete('/deletar/:placa', (req, res) => {
    const {placa} = req.params;
    const query = 'DELETE FROM carros WHERE placa = ?';
    connection.query(query, [placa], (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Erro ao remover carro da vaga.' });
      }
      res.json({ success: true, message: 'Carro removido da vaga com sucesso!' });
    });
  });

// TESTANDO O EDITAR!!!

//   app.put('/editar/:placa', (req, res) => {
//     const placa = req.params.placa;
//     const { marca, modelo, placaNova, cpf, vaga_preferencial } = req.body;

//     console.log('Recebendo requisição para editar:', { marca, modelo, placaNova, cpf, vaga_preferencial });

//     const query = 'UPDATE carros SET marca=?, modelo=?, placa=?, cpf=?, vaga_preferencial=? WHERE placa=?';
//     connection.query(query, [marca, modelo, placaNova, cpf, vaga_preferencial], (err) => {
//         if (err) {
//             console.error('Erro no banco de dados:', err);
//             return res.status(500).json({ success: false, message: 'Erro ao editar informações do carro!' });
//         }
//         res.json({ success: true, message: 'Informações do carro editadas com sucesso!' });
//     });
// });


// app.put('/editar/:placa', (req, res) => {
//     const placa = req.params.placa;
//     const { marca, modelo, placaNova, cpf, vaga_preferencial } = req.body;

//     console.log('Recebendo requisição para editar:', { marca, modelo, placaNova, cpf, vaga_preferencial });

//     const query = 'UPDATE carros SET marca=?, modelo=?, placa=?, cpf=?, vaga_preferencial=? WHERE placa=?';
//     connection.query(query, [marca, modelo, placaNova, cpf, vaga_preferencial, placa], (err) => {
//         if (err) {
//             console.error('Erro no banco de dados:', err);
//             return res.status(500).json({ success: false, message: 'Erro ao editar as informações do carro!' });
//         }
//         res.json({ success: true, message: 'Informações do carro editadas com sucesso!' });
//     });
// });

app.put('/editar/:placa', (req, res) => {
    // const placa = req.params.placa;
    const { marca, modelo, placa, cpf, vaga_preferencial } = req.body;

    console.log('Recebendo requisição para editar:', { marca, modelo, placa, cpf, vaga_preferencial });

    const query = 'UPDATE carros SET marca=?, modelo=?, placa=?, cpf=?, vaga_preferencial=? WHERE placa=?';
    connection.query(query, [marca, modelo, placa, cpf, vaga_preferencial, placa], (err) => {
        if (err) {
            console.error('Erro no banco de dados:', err);
            return res.status(500).json({ success: false, message: 'Erro ao editar as informações do carro!' });
        }
        res.json({ success: true, message: 'Informações do carro editadas com sucesso!' });
    });
});

// app.put("/editar", (req, res) => {
//     let { placa, placaNova } = req.body;
  
//     if (!placa || !placaNova) {
//       return res.status(400).json({ mensagem: "Placa antiga e nova são obrigatórias." });
//     }
  
//     placa = placa.toUpperCase();
//     placaNova = placaNova.toUpperCase();
  
//     // verificar se a placa existe
//     const checkQuery = "SELECT * FROM carros WHERE placa = ?";
//     connection.query(checkQuery, [placa], (err, resultados) => {
//       if (err) {
//         console.error("Erro ao verificar veículo:", err);
//         return res.status(500).json({ mensagem: "Erro interno no servidor." });
//       }
  
//       if (resultados.length === 0) {
//         return res.status(404).json({ mensagem: "Veículo não encontrado." });
//       }
  
//       // Se a placa existe, então faz o update
//       const updateQuery = "UPDATE carros SET placa = ? WHERE placa = ?";
//       connection.query(updateQuery, [placaNova, placa], (err, updateResultados) => {
//         if (err) {
//           console.error("Erro ao editar veículo:", err);
//           return res.status(500).json({ mensagem: "Erro interno no servidor." });
//         }
  
//         res.json({ success: true, mensagem: "Veículo editado com sucesso!" });
//       });
//     });
//   });
