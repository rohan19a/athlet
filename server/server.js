const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const User = require('./models/User');
const schema = require('./schema.graphql');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

const root = {
  users: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw err;
    }
  },
  createUser: async ({ input }) => {
    try {
      const { username, password, email, firstName, lastName, dateOfBirth, highSchool } = input;
      const user = new User({
        username,
        password,
        email,
        firstName,
        lastName,
        dateOfBirth,
        highSchool
      });
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: buildSchema(schema),
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
