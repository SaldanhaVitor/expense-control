const joi = require('@hapi/joi');

module.exports = () => ({
    params: joi.object().keys({
        cep: joi.string().required()
    })
});