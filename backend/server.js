const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = require('./app');

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use('/api', app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
