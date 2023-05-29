const data = require('./data.json');

function getPenyakit(nama) {
  const penyakit = data.penyakit.find(item => item.nama.toLowerCase() === nama.toLowerCase());

  return penyakit;
}

module.exports = {
  getPenyakit
};
