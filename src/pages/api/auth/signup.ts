import { hashPassword } from "../../../../lib/auth";
import { connectToDatabase } from "../../../../lib/db";

// create a new user
export default async function handler(req: any, res: any) {
  // log test
  console.log("test");
  // log request method
  console.log("req.method  : ", req.method);
  // check request method
  if (req.method == "POST") {
    console.log("post request");
    // get data from request
    const data = req.body;
    const { email, password } = data;

    // validate data
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res
        .status(422)
        .json({ message: "Invalid input - check email or password" });
      return;
    }

    // connect to db
    const client = await connectToDatabase();
    const db = client.db();

    // check if user already exists
    const existingUser = await db.collection("users").findOne({ email: email });

    // if user exists
    if (existingUser) {
      res
        .status(422)
        .json({ message: `User already exists, try loggin in with ${email}` });
      client.close();
      return;
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // log email and hashed password
    console.log("email  : ", email);
    console.log("hashedPassword  : ", hashedPassword);

    // get users collection
    const result = await db
      .collection("users")
      .insertOne({ email: email, password: hashedPassword });

    // response
    res.status(201).json({ message: "Created user!" });
    client.close();
  }
}
