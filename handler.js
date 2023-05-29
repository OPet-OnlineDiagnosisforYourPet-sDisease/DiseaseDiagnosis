const data = require('./data.json');

const getPenyakitByName = (nama) => {
    const penyakit = data.penyakit.find((item) => item.hasOwnProperty(nama));

    if (penyakit) {
        return penyakit[nama];
    } else {
        throw new Error('Penyakit tidak ditemukan');
    }
};

module.exports = {
    getPenyakitByName,
};
