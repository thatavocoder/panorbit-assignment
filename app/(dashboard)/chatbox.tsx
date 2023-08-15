"use client"

import React, { useState } from "react"

interface ChatboxProps {
  selectedUser: string
}

const Chatbox: React.FC<ChatboxProps> = ({ selectedUser }) => {
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

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
    <div className="w-3/4 p-4">
      <h3 className="text-lg font-semibold">{selectedUser}</h3>
      <div className="h-40 border p-2 overflow-y-scroll">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Chatbox
