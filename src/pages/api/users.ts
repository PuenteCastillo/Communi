// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// type UserData = {
//   name: string;
//   email: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // connet to the database
  const client = await MongoClient.connect(
    "mongodb+srv://puente700:geaLp2B5J8ycFu2@commuicluster.j4keyqs.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const usersCollection = db.collection("users");

  //? Get request
  if (req.method === "GET") {
    // get all users from the database

    const users = await usersCollection.find().toArray();

    res.status(200).json({ users });
    return;
  }

  //? Post request
  if (req.method === "POST") {
    // parse the body
    const data = req.body;
    console.log("data  : ", data);

    // make req.body readable
    const { name, email, title, bio, profile_pic, services } = req.body;

    // check if user already exists by email
    const userExist = await usersCollection.findOne({ email });

    // varify email
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    // check if user already exists by email
    if (userExist) {
      res.status(422).json({ message: "User already exists" });
      return;
    }

    await usersCollection.insertOne({
      name,
      email,
      title,
      bio,
      profile_pic,
      services,
    });

    res.status(201).json({ Request: req.body });
    return;
  }

  client.close();
}
// dummy json data
