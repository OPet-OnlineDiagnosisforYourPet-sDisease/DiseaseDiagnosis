const fs = require('fs');

function getPenyakitDetail() {
    const data = fs.readFileSync('./data.json');
    const jsonData = JSON.parse(data);
    return jsonData.penyakit[0];
}

function getPenyakitById(id) {
    const penyakitDetail = getPenyakitDetail();
    return penyakitDetail[id] || null;
}

function getPenyakitByNama(nama) {
    const penyakitDetail = getPenyakitDetail();
    const penyakit = Object.values(penyakitDetail).find(
        (item) => item.nama.toLowerCase() === nama.toLowerCase()
    );
    return penyakit || null;
}

module.exports = { getPenyakitDetail, getPenyakitById, getPenyakitByNama };