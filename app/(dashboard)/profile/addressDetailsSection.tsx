"use client"

import { UserContext } from "@/shared/context/userContext"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import React, { useContext } from "react"

const AddressDetailsSection = () => {
  const user = useContext(UserContext)

  const keyClass = "col-span-1 flex justify-end text-textGrey"
  const valueClass = "col-span-2"

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  })

  return (
    <div className="col-span-5 flex flex-col flex-1">
      <p className="text-textGrey">Address:</p>
      <div className="grid grid-cols-3 gap-y-3 mt-4 ml-8  w-64">
        <div className={keyClass}>
          <p>Street</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.address?.street}</p>
        </div>
        <div className={keyClass}>
          <p>Suite</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.address?.suite}</p>
        </div>
        <div className={keyClass}>
          <p>City</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.address?.city}</p>
        </div>
        <div className={keyClass}>
          <p>Zipcode</p>
          <p className={"mx-2"}>:</p>
        </div>
        <div className={valueClass}>
          <p>{user?.address?.zipcode}</p>
        </div>
      </div>
      {isLoaded && (
        <GoogleMap
          center={{
            lat: parseInt(user?.address?.geo?.lat as string),
            lng: parseInt(user?.address?.geo?.lng as string),
          }}
          mapContainerClassName="h-80 w-full mt-4 rounded-2xl mt-4"
          zoom={10}
        >
          <Marker
            position={{
              lat: parseInt(user?.address?.geo?.lat as string),
              lng: parseInt(user?.address?.geo?.lng as string),
            }}
          />
        </GoogleMap>
      )}
    </div>
  )
}

export default AddressDetailsSection
