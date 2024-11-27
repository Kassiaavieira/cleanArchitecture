const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../../controller/userController');

const app = express();
const userController = new UserController();

app.use(bodyParser.json());

app.post('/api/users', (req, res) => userController.create(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
