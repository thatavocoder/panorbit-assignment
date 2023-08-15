"use client"

import { Dispatch, createContext } from "react"
import { User, UsersListAction } from "../types"

export const UsersListContext = createContext<User[] | undefined>(undefined)
export const UsersListDispatchContext = createContext<
  Dispatch<UsersListAction> | undefined
>(undefined)
