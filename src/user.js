const ALPHA_USER = {
  username: process.env.USERNAME || 'test@mail.com',
  password: process.env.PASSWORD || 'Ch@ngeme1'
};

const BETA_USER = {
  username: process.env.USERNAME || 'test@mail.com',
  password: process.env.PASSWORD || 'Ch@ngeme1'
};

const PROD_USER = {
  username: process.env.USERNAME || 'test@mail.com',
  password: process.env.PASSWORD || 'Ch@ngeme1'
};

const getUserForEnv = function(targetEnv) {
  switch(targetEnv) {
    case 'PROD':
      return PROD_USER;
    case 'BETA':
      return BETA_USER;
    case 'ALPHA':
      return ALPHA_USER;
    default:
      return undefined;
  }
};

module.exports = {
  getUserForEnv
};
