const data = require('./data.json');

const getPenyakitByName = (nama) => {
  const penyakit = data.penyakit.find(item => item.nama.toLowerCase() === nama.toLowerCase());

  if (penyakit) {
    return penyakit;
  } else {
    throw new Error('Penyakit tidak ditemukan');
  }
};

module.exports = {
  getPenyakitByName
};
