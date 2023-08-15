"use client"

import React, { useState } from "react"
import UserList from "./userList"
import Chatbox from "./chatbox"

const ChatboxBottom: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [showUserList, setShowUserList] = useState(false)

  const toggleUserList = () => {
    setShowUserList(!showUserList)
  }

  return (
    <>
      <div className="absolute bottom-0 right-20 bg-white border-t border-gray-300">
        <button className="bg-blue-500 text-white" onClick={toggleUserList}>
          Chats
        </button>
        {showUserList && <UserList setSelectedUser={setSelectedUser} />}
      </div>
      {selectedUser && (
        <div className="flex-grow p-4 absolute bottom-0 right-56">
          <Chatbox selectedUser={selectedUser} />
        </div>
      )}
    </>
  )
}

export default ChatboxBottom
