const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

const port = 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});