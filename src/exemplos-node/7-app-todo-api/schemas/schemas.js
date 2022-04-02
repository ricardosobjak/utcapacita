// Schema representando o Login
const AuthSchema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 3,
            maxLength: 50
        },
        password: {
            type: 'string',
            minLength: 3,
            maxLength: 20
        }
    },
    required: ['username', 'password']
};

module.exports = { AuthSchema }