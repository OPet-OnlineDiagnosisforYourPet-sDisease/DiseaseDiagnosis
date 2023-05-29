const express = require('express');
const { getPenyakitByName } = require('./handler');

const router = express.Router();

// Convert the `nama` parameter to lowercase
router.get('/penyakit/:nama', (req, res) => {
  const { nama } = req.params;
  const lowerCaseNama = nama.toLowerCase();

  try {
    const penyakit = getPenyakitByName(lowerCaseNama);
    res.json(penyakit);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
