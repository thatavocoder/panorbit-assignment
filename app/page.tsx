import Background from "./(home)/background"
import UsersList from "./(home)/usersList"

export default async function Home() {
  const res = await fetch("https://panorbit.in/api/users.json")
  const data = await res.json()

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Background />
      <div className="relative h-96 w-1/2 z-50 bg-background rounded-2xl">
        <p className="text-textTitle text-xl py-10 text-center font-medium bg-backgroundDark rounded-t-2xl">
          Select an account
        </p>
        <div className="h-full w-full bg-background px-8 pb-4 overflow-scroll shadow-md rounded-b-2xl">
          <UsersList users={data.users} />
        </div>
      </div>
    </div>
  )
}
