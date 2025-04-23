import { useEffect, useState } from "react"
import { User } from "../interfaces/User"

const URL = "https://randomuser.me/api/?results=100"

export const Users = () => {

    const [UsersData, setUsersData] = useState<User[]>([])

    const DataUsers = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setUsersData(data?.results)
    }

    useEffect(() => {
        DataUsers()
    }, [])


    return {
        UsersData
    }
}




