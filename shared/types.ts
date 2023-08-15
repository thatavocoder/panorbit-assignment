interface UserCoordinates {
  lat: string
  lng: string
}

interface UserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: UserCoordinates
}

interface UserCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  profilepicture: string
  address: UserAddress
  phone: string
  website: string
  company: UserCompany
}

export interface UserAction {
  type: string
  payload: User
}

export interface UsersListAction {
  type: string
  payload: User[]
}
