import { MongoClient } from "mongodb";

// connect to db

export async function connectToDatabase() {
  // connect to mongodb
  const client = await MongoClient.connect(
    "mongodb+srv://puente700:geaLp2B5J8ycFu2@commuicluster.j4keyqs.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}
