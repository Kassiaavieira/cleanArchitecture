const UserRepository = require('../../domain/repositories/userRepository');

class UserRepo extends UserRepository {
  async createUser(user) {
    console.log('User created:', user);
  }

  async getUser(id) {
    return { id, name: 'Test User', email: 'test@domain.com' };
  }
}

module.exports = UserRepo;
