const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
