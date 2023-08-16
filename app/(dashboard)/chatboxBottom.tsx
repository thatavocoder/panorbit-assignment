"use client"

import React, { useState } from "react"
import ChatUserList from "./chatUserList"
import Chatbox from "./chatbox"
import { BsChatRight } from "react-icons/bs"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

const ChatboxBottom: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null)
  const [showUserList, setShowUserList] = useState(false)

  const toggleUserList = () => {
    setShowUserList(!showUserList)
  }

  return (
    <>
      <div className="fixed bottom-0 right-20 bg-white  border-gray-300 w-64">
        <div
          className="bg-primary text-base text-white px-4 py-3 rounded-t-xl w-full flex items-center justify-between cursor-pointer"
          onClick={toggleUserList}
        >
          <div className="flex items-center gap-2">
            <BsChatRight />
            Chats
          </div>
          {showUserList ? (
            <div className="text-2xl">
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div className="text-2xl">
              <MdKeyboardArrowUp />
            </div>
          )}
        </div>
        {showUserList && <ChatUserList setSelectedUser={setSelectedUser} />}
      </div>
      {selectedUser && (
        <div className="flex-grow fixed top-full right-96 -translate-y-full">
          <Chatbox
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
      )}
    </>
  )
}

export default ChatboxBottom
