"use client"

import { UserDispatchContext } from "@/shared/context/userContext"
import { UsersListDispatchContext } from "@/shared/context/usersListContext"
import { User } from "@/shared/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useContext, useEffect } from "react"

interface UsersListProps {
  users: User[]
}

const UsersList = ({ users }: UsersListProps) => {
  const dispatchUsersList = useContext(UsersListDispatchContext)
  const dispatchUser = useContext(UserDispatchContext)
  const router = useRouter()

  useEffect(() => {
    if (dispatchUsersList) {
      dispatchUsersList({ type: "SET_USERS_LIST", payload: users })
    }
  }, [dispatchUsersList, users])

  const handleUserClick = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user))
    if (dispatchUser) {
      dispatchUser({ type: "SET_USER", payload: user })
    }
    router.push(`/profile`)
  }

  return (
    <>
      {users.map((user: User, index: number) => (
        <div
          onClick={() => handleUserClick(user)}
          className="cursor-pointer hover:bg-backgroundDark"
          key={user.id}
        >
          <div className="flex items-center gap-4 py-2">
            <Image
              src={user.profilepicture}
              width={40}
              height={40}
              className="rounded-full"
              alt="profile picture"
            />
            <p className="text-textBody">{user.name}</p>
          </div>
          {index !== users.length - 1 && (
            <div className="h-[1px] bg-divider w-full"></div>
          )}
        </div>
      ))}
    </>
  )
}

export default UsersList
