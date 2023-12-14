import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from "@utils/database";
import User from "@models/user"; //user schema

// nextjs routes known as a serverless route -> lambda function

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  callbacks: {
    async session({session}) {// keep a session about logged in user
      const sessionUser = await User.findOne({
        email: session.user.email
      })

      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({profile}) {
      try {
        await connectToDB();
        //check if an user already exist
        const userExists = await User.findOne({
          email: profile.email
        });
        //if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture
            
          })
        }
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message)
        return false
      }
    }
  }
})

export { handler as GET, handler as POST }