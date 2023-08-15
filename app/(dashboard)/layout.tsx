import { Metadata } from "next"
import Sidebar from "./sidebar"
import Header from "./header"
import ChatboxBottom from "./chatboxBottom"

export const metadata: Metadata = {
  title: "Panorbit Dashboard",
  description: "Panorbit Dashboard",
}

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="py-8 px-12 min-h-screen grid grid-cols-9 gap-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <Header />
          {children}
        </div>
      </div>
      <ChatboxBottom />
    </>
  )
}

export default Layout
