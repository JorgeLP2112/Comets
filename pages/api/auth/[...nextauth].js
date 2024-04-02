import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "worker1" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  //,
  // callbacks: {
  //     async signIn({ account, profile }) {
  //         if (account.provider === "google") {
  //             return profile.email_verified && profile.email.endsWith("@example.com")
  //         }
  //         return true // Do different verification for other providers that don't have `email_verified`
  //     },
  //     async jwt({ token, account }) {
  //         if (account) {
  //             token.accessToken = account.access_token
  //         }
  //         return token
  //     },
  //     async session({ session, token, user }) {
  //         session.accessToken = token.accessToken
  //         return session
  //     }
  // }
};

export default NextAuth(authOptions);
