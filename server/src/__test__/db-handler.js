const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

// Connects to the in-memory database
module.exports.connect = async () => {
    const uri = await mongod.getConnectionString();

    const mongooseOpts = {
      useUnifiedTopology: true, 
      useNewUrlParser: true
    };

    await mongoose.connect(uri, mongooseOpts)
}

//  Drops db, closes connection, and stops mongod
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

// Removes all data for all sb collections.
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};