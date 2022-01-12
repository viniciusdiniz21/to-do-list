const express = require('express');

const app = express();

//use serve pra utilizar o middleware
//express.json verifica se quando é feita uma chamada existe um json e se ele
//deve processar esse json
//deixa o json em req.body
app.use(express.json())

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/', (req, res) =>{
    res.send('<h1>Minha lista de Tarefas</h1>');
});

app.get('/json', (req, res) =>{
    res.json({title: 'Tarefa X', done: true});
});

app.listen(3000,()=>{
    console.log('Servidor iniciado!')
});

