
const { Router } = require('express');

const express = require('express');

const router = express.Router();

const Contenedor = require('../data/index');

const contenedor = new Contenedor('productos.txt');

router.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos);
});

router.get('/productos/:id', async (req, res) => {
    const { id } = req.params;
    const producto = await contenedor.getById(id);
    res.json(producto);
});

router.post('/productos', async (req, res) => {
    const producto = req.body;
    const id = await contenedor.save(producto);
    res.json({ id });
});

router.put('/productos/:id', async (req, res) => {

    const { id } = req.params;
    const producto = req.body;
    const productoActualizado = await contenedor.updateById(id
        , producto);
    res.json(productoActualizado);
});

router.delete('/productos/:id', async (req, res) => {
    const { id } = req.params;
    await contenedor.deleteById(id);
    res.json({ id });
}
);

module.exports = router;



