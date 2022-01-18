const exp = require('constants');
const express = require('express');
const path = require('path')

const checklistRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

require('./config/database');

const app = express();

//use serve pra utilizar o middleware
//express.json verifica se quando é feita uma chamada existe um json e se ele
//deve processar esse json
//deixa o json em req.body
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
//path.join serve para mostrar para o express onde está o diretório

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
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


