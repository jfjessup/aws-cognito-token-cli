const Promise = require('bluebird');

const AuthenticationDetails = require('amazon-cognito-identity-js').AuthenticationDetails;
const CognitoUserPool = require('amazon-cognito-identity-js').CognitoUserPool;
const CognitoUser = require('amazon-cognito-identity-js').CognitoUser;

const retrieveSession = function (userPoolId, clientId, alias, password) {
  const authUser = new CognitoUser({
    Username: alias,
    Pool: new CognitoUserPool({
      UserPoolId: userPoolId,
      ClientId: clientId,
    }),
  });
  if (!authUser) {
    console.error('FAILED TO INSTANTIATE COGNITO USER!');
    process.exit(1);
  }

  const authDetails = new AuthenticationDetails({
    Username: alias,
    Password: password,
  });
  if (!authDetails) {
    console.log('FAILED TO INSTANTIATE AUTHENTICATION DETAILS!');
    process.exit(1);
  }

  return new Promise((resolve, reject) => {
    authUser.authenticateUser(authDetails, {
      onSuccess: (session) => {
        resolve({
          idToken: session.getIdToken().getJwtToken(),
          accessToken: session.getAccessToken().getJwtToken()
        });
      },
      onFailure: (error) => {
        reject(error);
      },
    });
  });
};

module.exports = {
  retrieveSession
};
