module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  users/:
         *   post:
         *      tags:
         *          - User
         *      summary: This should create users.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: User return with success.
         *        400:
         *          description: Bad Request.
         */
        {
            method: 'post',
            path: '/',
            validation: {
                body: ctx.userSchema.create,
            },
            handler: ctx.userController.createUser
        }, {
            method: 'get',
            path: '/',
            validation: {
                query: ctx.userSchema.get,
            },
            handler: ctx.userController.getUser
        },
    ];
};
