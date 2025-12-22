import connectToDB from '@/config/database';
import Users from '@/models/User';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          acces_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }: any) {
        console.log("===============profile===========",profile);
      // connect to DB
      await connectToDB();
      // check if user exists
      const user = await Users.findOne({ email: profile.email });
      // if not create a new user
      if (!user) {
        await Users.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
        });
      }
      return true;
    },
    // session callback function
    async session({ session }: any) {
      // get user from DB
      const user = await Users.findOne({email:session.user.email});
      session.user.id = user._id.toString();
      // assign userID from the session
      return session;
    },
  },
};