import UserProvider from "@/shared/context/userProvider"
import "./globals.css"
import type { Metadata } from "next"
import UsersListProvider from "@/shared/context/usersListProvider"
import { Noto_Sans } from "next/font/google"

const NotoSansFont = Noto_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

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
      <body className={`bg-background ${NotoSansFont.className}`}>
        <UsersListProvider>
          <UserProvider>{children}</UserProvider>
        </UsersListProvider>
      </body>
    </html>
  )
}
