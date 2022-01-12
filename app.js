const express = require('express');
const checklistRouter = require('./src/routes/checklist');
require('./config/database');

const app = express();

//use serve pra utilizar o middleware
//express.json verifica se quando é feita uma chamada existe um json e se ele
//deve processar esse json
//deixa o json em req.body
app.use(express.json())

app.use('/checklist', checklistRouter)


app.listen(3000,()=>{
    console.log('Servidor iniciado!')
});


/* const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/json', (req, res) =>{
    res.json({title: 'Tarefa X', done: true});
});
 */
app.get('/', (req, res) =>{
    res.send('<h1>Minha lista de Tarefas</h1>');
});

