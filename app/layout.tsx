import UserProvider from "@/shared/context/userProvider"
import "./globals.css"
import type { Metadata } from "next"
import UsersListProvider from "@/shared/context/usersListProvider"

export const metadata: Metadata = {
  title: "Panorbit Dashboard",
  description: "Panorbit Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <UsersListProvider>
          <UserProvider>{children}</UserProvider>
        </UsersListProvider>
      </body>
    </html>
  )
}
