const userModel = require('./model');

class UserService {
  constructor() {
    this.UserModel = userModel;
  }

  async createUser(data) {
    const user = await this.UserModel.create(data);
    return user;
  }

  async getAllUsers() {
    return await this.UserModel.find();
  }

  async getUserById(id) {
    return await this.UserModel.findById(id);
  }

  async updateUser(id, data) {
    return await this.UserModel.findByIdAndUpdate(id, data, { new: true, upsert: true });
  }

  async deleteUser(id) {
    return await this.UserModel.findByIdAndDelete(id);
  }

}

module.exports = new UserService();
