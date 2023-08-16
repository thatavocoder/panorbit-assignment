import React from "react"
import UserDetailsSection from "./userDetailsSection"
import AddressDetailsSection from "./addressDetailsSection"

const Page = () => {
  return (
    <div className="grid grid-cols-9 pt-8">
      <UserDetailsSection />
      <div className="col-span-1 flex justify-center items-center">
        <div className=" w-[1px] h-[90%] bg-divider" />
      </div>
      <AddressDetailsSection />
    </div>
  )
}

export default Page
