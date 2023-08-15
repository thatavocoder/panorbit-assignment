"use client"

import { UserContext, UserDispatchContext } from "@/shared/context/userContext"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useContext, useEffect } from "react"

const Header = () => {
  const pathname = usePathname()
  const user = useContext(UserContext)
  const dispatchUser = useContext(UserDispatchContext)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user && dispatchUser) {
      dispatchUser({ type: "SET_USER", payload: JSON.parse(user) })
    }
  }, [])

  const handleNameClick = () => {}

  return (
    <div className="py-4 border-b flex justify-between items-center">
      <p className="text-textTitle font-medium capitalize">
        {pathname.split("/")[1]}
      </p>
      <div className="flex items-center gap-2" onClick={handleNameClick}>
        <Image
          src={user?.profilepicture as string}
          width={30}
          height={30}
          className="rounded-full"
          alt="profile picture"
        />
        <p className="text-textBody tracking-wide text-sm">{user?.name}</p>
      </div>
    </div>
  )
}

export default Header
