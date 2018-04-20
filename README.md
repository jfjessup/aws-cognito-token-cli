# aws-cognito-token-cli

Generate access and identity tokens for you AWS Cognito User Pools.

### What

Generate access and identity tokens for a specific user per application environment.

NOTE: This project was a quick implementation. At this time it would be best to fork the project and
configure users and resources in your own repo.

### Why

If you are using AWS Cognito User Pools to authenticate calls to your application API then you will need an
identity token to authenticate your calls. Perhaps you want to develop a
[Serverless](https://serverless.com/framework/) API and test it with a REST client, such as
[insomnia](https://insomnia.rest/). You can use this project to generate your identity token and then drop
it into the `Authorization` header in your request. 

### How

* Add you UserPool's ID and Client's ID for each application enviroment.
* Run the following command:

```
USERNAME=<username> PASSWORD=<password> TARGET_RESOURCES=<target-environment> npm run gen:token
```

Sample input:

```
USERNAME=test@test.com PASSWORD=P@ssword1 TARGET_RESOURCES=BETA npm run gen:token
```

Sample output:

```

----------------------------------------------------------------------
GENERATE IDENTITY TOKEN AND ACCESS TOKEN FOR PLATFORM
GENERATING TOKENS FOR PLATFORM: BETA
DISCOVERED THE FOLLOWING ENVIRONMENT RESOURCES:
USER_POOL_ID: us-east-1_xxxxxxxxx
CLIENT_ID: xxxxxxxxxxxxxxxxxxxxxxxxxx
DISCOVERED THE FOLLOWING USER:
USERNAME: test@test.com
PASSWORD: **********
-> Identity Token:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-> Access Token:
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
----------------------------------------------------------------------

```
