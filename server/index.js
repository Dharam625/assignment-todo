const express = require('express'),
  path = require('path'),
  app = express();

const bodyParser = require('body-parser');

const HTTP_PORT = 3000;

app.use(bodyParser.json());
app.use (express.static ('public'));

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
