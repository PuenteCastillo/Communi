import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../../lib/db";
import { verifyPassword } from "../../../../lib/auth";
import { SessionProvider } from "next-auth/react";

// export default NextAuth({
//   // session
//   session: {
//     // jwt: true,
//     // maxage: 30 * 24 * 60 * 60, // 30 days
//   },
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: {
//           label: "email",
//           type: "text",
//           placeholder: "example@gmail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials: any, req: any) {
//         // connect to db
//         const client = await connectToDatabase();
//         const db = client.db();
//         const usersCollection = db.collection("users");

//         // check if user exists
//         // get user from db
//         const user = await usersCollection.findOne({
//           email: credentials.email,
//         });

//         // if user does not exist
//         if (!user) {
//           throw new Error(
//             `No user found for email ${credentials.email}, try signing up`
//           );
//           client.close();
//           return null;
//         }

//         // check if password is correct
//         const isValid = await verifyPassword(
//           credentials.password,
//           user.password
//         );

//         // if password is not valid
//         if (!isValid) {
//           throw new Error("Could not log you in");
//           client.close();
//           return null;
//         }

//         return { email: user.email };
//       },
//     }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID,
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     // }),

//     // ...add more providers here
//   ],
// });
