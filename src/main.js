console.log('----------------------------------------------------------------------');
console.log('GENERATE IDENTITY TOKEN AND ACCESS TOKEN FOR COGNITO USER POOL');

const target = process.env.TARGET_RESOURCES;

// Manage build target
if (!target || typeof target !== 'string' || target.length < 1) {
  console.error('TARGET_RESOURCE MUST BE DEFINED!');
  process.exit(1);
} else {
  console.log('GENERATING TOKENS FOR PLATFORM ENVIRONMENT: ' + target);
}

// Manager target environment build values
const targetResourceValues = require('./resources').getResourcesForEnv(target);
if (!targetResourceValues || typeof targetResourceValues !== 'object') {
  console.error('TARGET_RESOURCE NOT FOUND!');
  console.error('(check ./src/resources.js)');
  process.exit(1);
}

console.log('DISCOVERED THE FOLLOWING ENVIRONMENT RESOURCES:');
const USER_POOL_ID = targetResourceValues.AWS.COGNITO.USER_POOL_ID;
const CLIENT_ID = targetResourceValues.AWS.COGNITO.CLIENT_ID;
console.log('USER_POOL_ID: ' + USER_POOL_ID);
console.log('CLIENT_ID: ' + CLIENT_ID);

// Manage target environment user credentials
const targetUser = require('./user').getUserForEnv(target);
if (!targetUser || typeof targetUser !== 'object') {
  console.error('TARGET USER NOT FOUND!');
  console.error('(check ./src/user.js)');
  process.exit(1);
}

console.log('DISCOVERED THE FOLLOWING USER:');
const USERNAME = targetUser.username;
const PASSWORD = targetUser.password;
console.log('USERNAME: ' + USERNAME);
console.log('PASSWORD: **********');
// console.log('PASSWORD: ' + PASSWORD);

// Generate tokens!
require('./cognito').retrieveSession(
  USER_POOL_ID,
  CLIENT_ID,
  USERNAME,
  PASSWORD
)
  .then(function(response) {
    console.log('-> Identity Token:');
    console.log(response.idToken); // Displays base64 encoded identity token
    console.log('-> Access Token:');
    console.log(response.accessToken); // Displays base64 encoded access token
  })
  .catch(function(error) {
    console.error(error);
    process.exit(0);
  })
  .finally(function() {
    console.log('----------------------------------------------------------------------');
  });
