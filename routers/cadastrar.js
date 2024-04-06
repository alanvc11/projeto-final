const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

router.get('/', (req, res) => {
    res.render('cadastro');
});

function validarDataNascimento(data){
    const dataNascimento = new Date(data);
    const dataAtual = new Date();
    return dataNascimento < dataAtual;
}




module.exports = router;