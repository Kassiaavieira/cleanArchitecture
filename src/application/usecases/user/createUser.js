const User = require('../../../domain/entities/user/user');

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const user = new User(userData.id, userData.name, userData.email);
    await this.userRepository.createUser(user);
    return user;
  }
}

module.exports = CreateUser;
