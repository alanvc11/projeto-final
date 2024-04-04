const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

const indexRouters = require('./routers/index');
const cadastrarRouters = require('./routers/cadastrar');
const logarRouters = require('./routers/logar');
const agendarRouters = require('./routers/agendamento');
const planosRouters = require('./routers/plano');

app.use('/', indexRouters);
app.use('/cadastrar', cadastrarRouters);
app.use('/logar', logarRouters);
app.use('/agendamento', agendarRouters);
app.use('/plano', planosRouters);


// const loginRouters = require('./routers/login');
// app.use('/login', loginRouters);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});