"use client"

import { UserContext, UserDispatchContext } from "@/shared/context/userContext"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useContext, useEffect, useState, useRef } from "react"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const user = useContext(UserContext)
  const dispatchUser = useContext(UserDispatchContext)

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user && dispatchUser) {
      dispatchUser({ type: "SET_USER", payload: JSON.parse(user) })
    }
  }, [])

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    window.addEventListener("click", handleWindowClick)

    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  }, [])

  const handleNameClick = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="py-4 border-b flex justify-between items-center">
      <p className="text-textTitle font-medium capitalize">
        {pathname.split("/")[1]}
      </p>
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={handleNameClick}
          className="flex items-center cursor-pointer gap-2"
        >
          <Image
            src={user?.profilepicture as string}
            width={30}
            height={30}
            className="rounded-full"
            alt="profile picture"
          />
          <p className="text-textBody tracking-wide text-sm">{user?.name}</p>
        </div>
        <div
          className={`absolute z-10 mt-2 right-0 top-full bg-white divide-y divide-gray-100 rounded-2xl shadow-md w-64 ${
            !showDropdown && "hidden"
          }`}
        >
          <div className="p-4">hi</div>
        </div>
      </div>
    </div>
  )
}

export default Header
