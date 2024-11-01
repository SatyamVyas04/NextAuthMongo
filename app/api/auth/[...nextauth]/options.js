import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const options = {
  providers: [
    GithubProvider({
      profile(profile) {
        console.log('Github', profile);
        return { ...profile, role: 'user' };
      },
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log('Google', profile);
        return { ...profile, id: profile.sub, role: 'user' };
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.role = token.role;
      return session;
    },
  },
};
