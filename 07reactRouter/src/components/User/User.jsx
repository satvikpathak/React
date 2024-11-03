import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()

  return (
    <div className='  bg-orange-500 text-3xl flex justify-center items-center'>
        user : {userid}
    </div>
  )
}

export default User