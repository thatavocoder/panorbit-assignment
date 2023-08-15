import { Dispatch, createContext } from "react"
import { User, UserAction } from "../types"

export const UserContext = createContext<User | undefined>(undefined)
export const UserDispatchContext = createContext<
  Dispatch<UserAction> | undefined
>(undefined)
