"use client"

import React, { useReducer } from "react"
import { UsersListContext, UsersListDispatchContext } from "./usersListContext"
import { User, UsersListAction } from "../types"

interface UsersListProviderProps {
  children: React.ReactNode
}

const UsersListProvider = ({ children }: UsersListProviderProps) => {
  const initialUsersList = [] as User[]

  const usersListReducer = (user: User[], action: UsersListAction) => {
    switch (action.type) {
      case "SET_USERS_LIST":
        return action.payload
      default:
        return user
    }
  }

  const [user, dispatch] = useReducer(usersListReducer, initialUsersList)

  return (
    <UsersListContext.Provider value={user}>
      <UsersListDispatchContext.Provider value={dispatch}>
        {children}
      </UsersListDispatchContext.Provider>
    </UsersListContext.Provider>
  )
}

export default UsersListProvider
