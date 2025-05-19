import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const dynamic = "force-static"

export function generateStaticParams() {
  return [
    { nextauth: ["session"] },
    { nextauth: ["signin"] },
    { nextauth: ["signout"] },
    { nextauth: ["callback"] },
    { nextauth: ["verify-request"] },
    { nextauth: ["error"] }
  ]
}

// This is a mock user database - in a real application, you would use a proper database
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "user@exMIH.com",
    // This is "password123"
    password: "password123",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find((user) => user.email === credentials.email)
        if (!user) {
          return null
        }

        // In a real application, you would verify the password against a hashed version in your database
        const isPasswordValid = user.password === credentials.password
        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
