"use client"

import { UsersListContext } from "@/shared/context/usersListContext"
import Image from "next/image"
import React, { Dispatch, SetStateAction, useContext } from "react"
import { BsCircleFill } from "react-icons/bs"

interface ChatUserListProps {
  setSelectedUser: Dispatch<SetStateAction<number | null>>
}

const ChatUserList = ({ setSelectedUser }: ChatUserListProps) => {
  const usersList = useContext(UsersListContext)

  const handleUserClick = (userId: number) => {
    setSelectedUser(userId)
  }

  return (
    <div className="flex flex-col p-4 border border-b-0 border-primary max-h-96 overflow-scroll">
      {usersList?.map((user) => (
        <div
          className="cursor-pointer flex items-center py-1 justify-between"
          onClick={() => handleUserClick(user.id)}
        >
          <div className="flex items-center gap-2">
            <Image
              src={user.profilepicture}
              width={40}
              height={40}
              className="rounded-full"
              alt="profile picture"
            />
            <p className="text-textBody tracking-wide text-sm">{user?.name}</p>
          </div>
          <BsCircleFill className="text-xs text-success" />
        </div>
      ))}
    </div>
  )
}

export default ChatUserList
