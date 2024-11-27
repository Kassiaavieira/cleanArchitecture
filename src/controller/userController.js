const CreateUser = require('../application/usecases/user/createUser');
const UserRepo = require('../infrastructure/dao/userRepo');

class UserController {
  constructor() {
    this.userRepo = new UserRepo();
    this.createUser = new CreateUser(this.userRepo);
  }

  async create(req, res) {
    try {
      const { id, name, email } = req.body;
      const user = await this.createUser.execute({ id, name, email });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
