import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function UserList() {
    const [users, setUsers] = useState([])
    const API = "https://jsonplaceholder.typicode.com/users/"

    async function fetchUsers() {
        try {
            const res = await fetch(API)
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log("ERROR", error)
        }
    }


    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className='bg-gray-900 text-white h-screen w-screen'>
            <h1 className='text-4xl mb-1.5 font-semibold'>User List</h1>
            <ul>
                {users.map((item) => {
                    return <li key={item.id} className='mb-2'>
                        <Link to={`/users/${item.id}`} className='underline text-blue-800'>
                            {item.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UserList