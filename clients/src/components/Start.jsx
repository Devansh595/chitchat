import React, { useEffect } from 'react'
import { validUser } from '../apis/auth'
import { useNavigate } from "react-router-dom"
function Start() {
  const pageRoute = useNavigate()
  useEffect(() => {
    const isValid = async () => {
      const data = await validUser()
      if (!data?.user) {
        pageRoute("/login")
      }
      else {
        pageRoute("/chats")

      }
    }
    isValid()

  }, [pageRoute])
  return (


    <div className='bg-[#fff] flex items-center justify-center w-[100vw] h-[100vh]  flex-col -gap-y-10'>
      <lottie-player src="https://lottie.host/a2d90b49-f163-4897-94c4-9adea9a04a42/873uuhRAOC.json" background="transparent" speed="1" style={{ width: "300px", height: "260px" }} loop autoplay></lottie-player>
      <h3 className='font-semibold text-[13px] tracking-wider relative -top-16'>Please Wait. It Might take some time</h3>
    </div>

  )
}

export default Start