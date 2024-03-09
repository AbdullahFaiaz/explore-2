import { useEffect, useState } from "react"
import ShowUser from "./ShowUser"

export default function User() { 
    const [users, setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    },[])
    return (
        <div>
        <h2>Users</h2>
        {
            users.map(get => <ShowUser info={get}></ShowUser>)
        }
        </div>
    )
}