import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

   const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/satvikpathak')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

   

  return (
    <div className=' border-4   border-orange-600 text-center px-32 m-4 bg-gray-600 text-white p-4 text-3xl shadow-xl rounded-md'>
        <p className='border-2 rounded-lg border-orange-500 p-4 '>Github Followers: {data.followers}</p>
    
    <div className='flex justify-center items-center m-8'>
        <img className = 'border-4 rounded-full border-orange-400' src={data.avatar_url} width={300} alt="" />
        <div className='flex flex-col gap-10 py-4 border-orange-400 m-8 border-4 rounded-md'> 
            <p>{data.name}</p>
            <p>{data.bio}</p>
        </div>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/satvikpathak')
    return response.json()
}

//preprocessing preloading