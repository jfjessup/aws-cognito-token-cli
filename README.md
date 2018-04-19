# aws-cognito-token-cli

Generate access and identity tokens for you AWS Cognito User Pools.

### What

Generate access and identity tokens for a specific user per application environment.

NOTE: This project was a quick implementation. At this time it would be best to fork the project and
configure users and resources in your own repo.

### Why

If you are using AWS Cognito User Pools to authenticate calls to your application API then you will need an
access token to authenticate your calls. Perhaps you want to deploy a
[Serverless](https://serverless.com/framework/) API but want to test your API with a REST client, such as
[insomnia](https://insomnia.rest/). You can use this project to generate you access tokens and then drop
them into the `Authorization` header in your request. 

### How

* Add you UserPool's ID and Client's ID for each application enviroment.
* Run the following command:

```
USERNAME=<username> PASSWORD=<password> TARGET_ENV=<target-environment> npm run gen:token
```
