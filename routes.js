const express = require('express');
const { getPenyakitByName } = require('./handler');

const router = express.Router();

router.get('/penyakit/:nama', (req, res) => {
  let { nama } = req.params;
  nama = nama.toLowerCase(); // Mengubah nama menjadi huruf kecil

  try {
    const penyakit = getPenyakitByName(nama);
    res.json(penyakit);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
