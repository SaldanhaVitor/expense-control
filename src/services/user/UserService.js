module.exports = ({ userRepository }) => ({
    createUser: async (data) => {
        return await userRepository.createUser(data);
    },
    getUser: async (data) => {
        return await userRepository.getUser(data);
    }
});