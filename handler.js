const fs = require('fs');

// Membaca data dari file data.json
const rawData = fs.readFileSync('data.json');
const data = JSON.parse(rawData);

exports.getPenyakit = (req, res) => {
    const penyakit = Object.keys(data.penyakit);
    res.json(penyakit);
};

exports.getDetailPenyakitIgnoreCase = (req, res) => {
    const { nama } = req.params;
    const penyakit = Object.keys(data.penyakit).find((key) =>
        key.toLowerCase() === nama.toLowerCase()
    );

    if (penyakit) {
        res.json(data.penyakit[penyakit]);
    } else {
        res.status(404).json({ error: 'Penyakit tidak ditemukan' });
    }
};
