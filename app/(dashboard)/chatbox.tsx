"use client"

import { UsersListContext } from "@/shared/context/usersListContext"
import Image from "next/image"
import React, { Dispatch, SetStateAction, useContext, useState } from "react"
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSend,
} from "react-icons/md"

interface ChatboxProps {
  selectedUser: number
  setSelectedUser: Dispatch<SetStateAction<number | null>>
}

const Chatbox: React.FC<ChatboxProps> = ({
  selectedUser,
  setSelectedUser,
}: ChatboxProps) => {
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const [showMessageBox, setShowMessageBox] = useState(true)

  const usersList = useContext(UsersListContext)
  const selectedUserDetails = usersList?.find(
    (user) => user.id === selectedUser
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() !== "") {
      setMessages([...messages, inputMessage])
      setInputMessage("")
    }
  }

  return (
    <div className="w-80">
      <div className="bg-primary text-base text-white p-4 rounded-t-2xl w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={selectedUserDetails?.profilepicture as string}
            width={30}
            height={30}
            className="rounded-full"
            alt="profile picture"
          />
          {selectedUserDetails?.name}
        </div>
        <div className="flex gap-2">
          {showMessageBox ? (
            <div className="text-2xl" onClick={() => setShowMessageBox(false)}>
              <MdKeyboardArrowDown />
            </div>
          ) : (
            <div className="text-2xl">
              <MdKeyboardArrowUp onClick={() => setShowMessageBox(true)} />
            </div>
          )}
          <div className="text-xl" onClick={() => setSelectedUser(null)}>
            <MdClose />
          </div>
        </div>
      </div>
      {showMessageBox && (
        <>
          <div className="border border-b-0 border-primary max-h-64 h-64 overflow-y-scroll p-4 flex flex-col">
            <div className="w-52 py-2 px-4 bg-chatBubble relative rounded-2xl text-xs chatBubble-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              ipsum.
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">9:16</p>
            <div className="w-52 py-2 px-4 bg-chatBubble relative rounded-2xl mt-2 text-xs chatBubble-left">
              Lorem ipsum dolor sit amet.
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className="w-52 py-2 px-4 text-xs bg-chatBubble relative rounded-2xl chatBubble-right mt-2 ml-auto"
              >
                {message}
              </div>
            ))}
          </div>
          <form
            className="relative top-full flex border"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="p-2 w-full outline-none text-sm"
            />
            <button type="submit" className="text-primary p-2 rounded text-xl">
              <MdSend />
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Chatbox
