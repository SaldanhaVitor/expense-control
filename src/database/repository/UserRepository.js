class UserRepository {
    constructor({ userModel }) {
        this.userModel = userModel;
    }

    async createUser(data) {
        return await this.userModel.create(data);
    }

    async getUser(data){
        return await this.userModel.findById(data.id);
    }
}

module.exports = UserRepository;
