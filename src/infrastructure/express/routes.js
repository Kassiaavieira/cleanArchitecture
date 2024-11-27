const express = require('express');
const CreateUser = require('../../application/usecases/user/createUser');
const UserRepo = require('../dao/userRepo');

const userRepo = new UserRepo();
const createUser = new CreateUser(userRepo);

const router = express.Router();

router.post('/users', async (req, res) => {
  const userData = req.body;
  const user = await createUser.execute(userData);
  res.status(201).json(user);
});

module.exports = router;
