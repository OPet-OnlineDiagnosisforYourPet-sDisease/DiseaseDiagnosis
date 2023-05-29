const express = require('express');
const { getPenyakitByName } = require('./handler');

const router = express.Router();

router.get('/penyakit/:nama', (req, res) => {
    const { nama } = req.params;

    try {
        const penyakit = getPenyakitByName(nama);
        res.json(penyakit);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
