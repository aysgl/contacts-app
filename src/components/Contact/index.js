import React, { useEffect, useState } from 'react'
import AddContact from './AddContact'
import List from './List'
import axios from "axios"

export default function Contact() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`, {})
            .then(res => {
                const contacts = res.data
                setContacts(contacts)
                // console.log(contacts)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div>
            <List contacts={contacts} />
            <AddContact contacts={contacts} setContacts={setContacts} />
        </div>
    )
}
