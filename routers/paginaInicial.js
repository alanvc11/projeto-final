const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pagina-inicial');
});


module.exports = router;