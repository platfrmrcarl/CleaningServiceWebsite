import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import MicrosoftEntraId from "next-auth/providers/microsoft-entra-id"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google,
        MicrosoftEntraId({
            clientId: process.env.MICROSOFT_CLIENT_ID,
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
            issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },
        async jwt({ token, user, account, profile, trigger, session }) {
            if (!token.sub) return token;
            console.log({ token: token });
            if (account) {
                token.accessToken = account.access_token;
                token.id = profile?.id;
            }
            return token;
        },
        async session({ session, user, token }) {
            console.log({ sessionToken: token });
            return session;
        },
    },
    events: {
        async signIn(message) { },

        async signOut(message) { },

        async createUser(message) { },
        async linkAccount({ user, profile }) { },
    },
    pages: {
        signIn: "/auth/login",
        verifyRequest: "/auth/verify-request",
        error: "/auth/error",
    },
})
