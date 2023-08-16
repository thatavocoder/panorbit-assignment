"use client"

import { UserContext, UserDispatchContext } from "@/shared/context/userContext"
import { UsersListContext } from "@/shared/context/usersListContext"
import { User } from "@/shared/types"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import React, { useContext, useEffect, useState, useRef } from "react"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const user = useContext(UserContext)
  const dispatchUser = useContext(UserDispatchContext)
  const usersList = useContext(UsersListContext)
  const router = useRouter()

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

  const handleUserClick = (u: User) => {
    localStorage.setItem("user", JSON.stringify(u))
    if (dispatchUser) dispatchUser({ type: "SET_USER", payload: u })
  }

  const handleSignOutClick = () => {
    localStorage.removeItem("user")
    if (dispatchUser) dispatchUser({ type: "SET_USER", payload: {} as User })
    router.push("/")
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
          className={`absolute z-10 mt-2 right-0 top-full bg-white divide-y divide-gray-100 rounded-2xl shadow-md w-80 ${
            !showDropdown && "hidden"
          }`}
        >
          <div className="p-8">
            <div className="flex flex-col items-center">
              <Image
                src={user?.profilepicture as string}
                width={70}
                height={70}
                className="rounded-full"
                alt="profile picture"
              />
              <p className="text-textBody tracking-wide text-sm mt-3">
                {user?.name}
              </p>
              <p className="text-gray-400 tracking-wide text-sm mt-1">
                {user?.email}
              </p>
            </div>
            <div className="h-[1px] bg-divider mt-4" />
            {
              // show only 2 users
              usersList
                ?.filter((u) => u.id !== user?.id)
                .map((u, i) => {
                  if (i < 2) {
                    return (
                      <>
                        <div
                          key={u.id}
                          className="flex items-center justify-center gap-3 cursor-pointer py-2"
                          onClick={() => handleUserClick(u)}
                        >
                          <Image
                            src={u.profilepicture as string}
                            width={35}
                            height={35}
                            className="rounded-full"
                            alt="profile picture"
                          />
                          <p className="text-textBody tracking-wide text-sm">
                            {u.name}
                          </p>
                        </div>
                        {i !== 1 && <div className="h-[1px] bg-divider" />}
                      </>
                    )
                  }
                })
            }
            <div className="flex justify-center mt-4">
              <button
                className="bg-error py-2 px-4 rounded-full text-white font-medium"
                onClick={handleSignOutClick}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
