module.exports = ({ userService }) => ({
    execute: async params => {
        return await userService.getUser(params);
    }
});