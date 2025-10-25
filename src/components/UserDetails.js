import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)  // default to true
  const [user, setUser] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div>Loading...</div>  // simple single place

  return (
    <div className='p-3.5 bg-gray-900 text-white h-screen w-screen'>
      <h1 className='text-4xl mb-1.5 font-semibold'>User Details</h1>
      <div key={user.id}>
        <p className='mb-2'>Name: {user.name}</p>
        <p className='mb-2'>Username: {user.username}</p>
        <p className='mb-2'>Email: {user.email}</p>
        <p className='mb-2'>Phone: {user.phone}</p>
        <p className='mb-2'>Website: {user.website}</p>
      </div>
    </div>
  )
}

export default UserDetails
