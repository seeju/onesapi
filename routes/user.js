const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando o GET dentro da rota user'
    })
});

router.post('/', (req, res, next) => {
    const cadastro = {
        name: req.body.name,
        email: req.body.email
    };
    
    res.status(201).send({
        message: 'Cadastro efetuado',
        cadastrocriado: cadastro

    })
});

//consulta um produto específico
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product

    if (id === 'especial') {
        res.status(200).send({
            message: 'especial',
            id: id
        });
    } else {
        res.status(200).send({
            message: 'Só um id'
        });
    }

//deleta um produto    
router.delete('/:id_product', (req, res, next) => {
    const id = req.params.id_product
    res.status(201).send({
        message: 'Cadastro deletado',
        id: id
        });
    })



});
module.exports = router;