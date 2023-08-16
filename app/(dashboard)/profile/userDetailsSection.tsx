"use client"

import { UserContext } from "@/shared/context/userContext"
import Image from "next/image"
import React, { useContext } from "react"

const UserDetailsSection = () => {
  const user = useContext(UserContext)

  const keyClass = "col-span-1 flex justify-end text-textGrey"
  const valueClass = "col-span-1"

  return (
    <div className="col-span-3 flex flex-col items-center gap-3">
      <Image
        src={user?.profilepicture as string}
        alt="profile picture"
        width={170}
        height={170}
        className="rounded-full"
      />
      <p className="font-medium">{user?.name}</p>
      <div className="grid grid-cols-2 gap-y-3">
        <div className={keyClass}>
          <p>Username</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.name}</p>
        </div>
        <div className={keyClass}>
          <p>e-mail</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.email}</p>
        </div>
        <div className={keyClass}>
          <p>Phone</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.phone}</p>
        </div>
        <div className={keyClass}>
          <p>Website</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.website}</p>
        </div>
      </div>
      <div className="h-[1px] bg-divider w-4/5 mt-4" />
      <p className="text-textGrey">Company</p>
      <div className="grid grid-cols-2 gap-y-3">
        <div className={keyClass}>
          <p>Name</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.company?.name}</p>
        </div>
        <div className={keyClass}>
          <p>catchphrase</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.company?.catchPhrase}</p>
        </div>
        <div className={keyClass}>
          <p>bs</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.company?.bs}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetailsSection
