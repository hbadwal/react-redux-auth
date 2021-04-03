To test authentication locally, both client and server need to run on local machine.

# To execute client

Project is bootstrapped using create-react-app.

To run client locally:

- In client directory, run `npm install` or `yarn`.
- After it succeed, run `npm run start` or `yarn start`.

To run test framework locally:

- In client directory, run `yarn test` or `npm test`.

# To execute dummy server

Node, express, jwt, MongoDB is used for this dummy server. This can be used to test out the client.

To run it locally:

- Make sure you have a config.js file in dummy-server root directory. This file contains seceret key information used to cerate token.
- In root dummy-server directory, run `npm install`.
- After it succeed, run `node index.js` from root directory. This should run the service.
- You will also need to install MongoDb on your machine and start it. Here is the information to do that [Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
