const ALPHA_RESOURCES = {
  RESOURCE_TARGET: 'ALPHA',
  AWS: {
    COGNITO: {
      USER_POOL_ID: 'us-east-1_xxxxxxxxx',
      CLIENT_ID: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
  },
};

const BETA_RESOURCES = {
  RESOURCE_TARGET: 'BETA',
  AWS: {
    COGNITO: {
      USER_POOL_ID: 'us-east-1_xxxxxxxxx',
      CLIENT_ID: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
  },
};

const PROD_RESOURCES = {
  RESOURCE_TARGET: 'PROD',
  AWS: {
    COGNITO: {
      USER_POOL_ID: 'us-east-1_xxxxxxxxx',
      CLIENT_ID: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
  },
};

const getResourcesForEnv = function(targetEnv) {
  switch(targetEnv) {
    case 'PROD':
      return PROD_RESOURCES;
    case 'BETA':
      return BETA_RESOURCES;
    case 'ALPHA':
      return ALPHA_RESOURCES;
    default:
      return undefined;
  }
};

module.exports = {
  getResourcesForEnv
};
