"use client"

import { UserContext } from "@/shared/context/userContext"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useContext } from "react"

const Header = () => {
  const pathname = usePathname()
  const user = useContext(UserContext)

  return (
    <div className="py-4 border-b flex justify-between">
      <p className="text-textTitle font-medium capitalize">
        {pathname.split("/")[1]}
      </p>
      <div className="flex items-center gap-4 tracking-wide">
        <Image
          src={user?.profilepicture as string}
          width={40}
          height={40}
          className="rounded-full"
          alt="profile picture"
        />
        <p className="text-textBody">{user?.name}</p>
      </div>
    </div>
  )
}

export default Header
