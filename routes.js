const express = require('express');
const router = express.Router();
const { getPenyakitDetail, getPenyakitById, getPenyakitByNama } = require('./handler');

router.get('/penyakit', (req, res) => {
    const penyakitDetail = getPenyakitDetail();
    res.json(penyakitDetail);
});

router.get('/penyakit/id/:id', (req, res) => {
    const id = req.params.id;
    const penyakit = getPenyakitById(id);
    if (penyakit) {
        res.json(penyakit);
    } else {
        res.status(404).send('Penyakit not found');
    }
});

router.get('/penyakit/nama/:nama', (req, res) => {
    const nama = req.params.nama;
    const penyakit = getPenyakitByNama(nama);
    if (penyakit) {
        res.json(penyakit);
    } else {
        res.status(404).send('Penyakit not found');
    }
});

module.exports = router;