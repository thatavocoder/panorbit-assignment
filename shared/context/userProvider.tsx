"use client"

import React, { useReducer } from "react"
import { UserContext, UserDispatchContext } from "./userContext"
import { User, UserAction } from "../types"

interface UserProviderProps {
  children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const initialUser = {} as User

  const userReducer = (user: User, action: UserAction) => {
    switch (action.type) {
      case "SET_USER":
        return action.payload
      default:
        return user
    }
  }

  const [user, dispatch] = useReducer(userReducer, initialUser)

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
