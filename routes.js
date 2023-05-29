const express = require('express');
const router = express.Router();
const handler = require('./handler');

router.get('/penyakit', handler.getPenyakit);
router.get('/penyakit/:nama', handler.getDetailPenyakitIgnoreCase);

module.exports = router;
