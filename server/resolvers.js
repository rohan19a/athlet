const resolvers = {
    Query: {
      getUser: async (parent, { username }, context) => {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error(`User with username ${username} not found`);
        }
        return user;
      },
      getAllPosts: async (parent, args, context) => {
        const posts = await Post.find({});
        return posts;
      },
    },
    Mutation: {
      createUser: async (parent, { input }, context) => {
        const user = new User(input);
        await user.save();
        return user;
      },
      createPost: async (parent, { input }, context) => {
        const post = new Post(input);
        await post.save();
        return post;
      },
      addConnection: async (parent, { userId, connectionId }, context) => {
        const user = await User.findById(userId);
        const connection = await User.findById(connectionId);
  
        if (!user || !connection) {
          throw new Error(`User or Connection not found`);
        }
  
        user.connections.push(connection);
        await user.save();
  
        return user;
      },
    },
    User: {
      posts: async (parent, args, context) => {
        const posts = await Post.find({ authorId: parent._id });
        return posts;
      },
      connections: async (parent, args, context) => {
        const user = await User.findById(parent._id).populate('connections');
        return user.connections;
      },
    },
    Post: {
      author: async (parent, args, context) => {
        const user = await User.findById(parent.authorId);
        return user;
      },
    },
  };
  