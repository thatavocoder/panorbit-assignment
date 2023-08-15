"use client"

import React, { Dispatch, SetStateAction, useState } from "react"

interface UserListProps {
  setSelectedUser: Dispatch<SetStateAction<string | null>>
}

const UserList = ({ setSelectedUser }: UserListProps) => {
  const handleUserClick = (userId: string) => {
    setSelectedUser(userId)
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        <ul>
          <li
            className="cursor-pointer text-blue-500"
            onClick={() => handleUserClick("user1")}
          >
            User 1
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserList
