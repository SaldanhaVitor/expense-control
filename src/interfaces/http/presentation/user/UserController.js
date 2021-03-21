const AsyncMiddleware = require('src/middlewares/AsyncMiddleware');

module.exports = opts => ({
    createUser: AsyncMiddleware(async ctx => {
        const response = await opts.createUserOperation.execute(ctx.body);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(response);
    }),
    getUser: AsyncMiddleware(async ctx => {
        const response = await opts.getUserOperation.execute(ctx.query);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    })
});