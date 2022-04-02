// Schema representando o Login
const AuthSchema = {
  type: 'object',
  properties: {
    login: {
      type: 'string',
      minLength: 3,
      maxLength: 50,
    },
    password: {
      type: 'string',
      minLength: 3,
      maxLength: 20,
    },
  },
  required: ['login', 'password'],
};

module.exports = {
  AuthSchema,
};
