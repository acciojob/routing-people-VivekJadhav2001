import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    async function fetchUser() {
        try {
            setLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await res.json()
            setUser([data])
            setLoading(false)
        } catch (error) {
            console.log("ERROR", error)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [id])

    if (loading) return <div>Loading...</div>

    return (
        <div className='p-3.5 bg-gray-900 text-white h-screen w-screen'>
            <h1 className='text-4xl mb-1.5 font-semibold'>User Details</h1>
            {loading ? <div>Loading...</div> : user?.map((item) => {
                return <div className="" key={item.id}>
                    <p className='mb-2'>Name: {user[0].name}</p>
                    <p className='mb-2'>Username: {user[0].username}</p>
                    <p className='mb-2'>Email: {user[0].email}</p>
                    <p className='mb-2'>Phone: {user[0].phone}</p>
                    <p className='mb-2'>Website: {user[0].website}</p>
                </div>
            })}
        </div>
    )
}

export default UserDetails
