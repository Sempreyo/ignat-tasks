import React, {ChangeEvent, useEffect, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {getGeolocation} from '../../api/api';

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string, country: string, city: string) => void // need to fix any
}

export type ErrorType = string | null

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<ErrorType>(null) // need to fix any
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')

    useEffect(() => {
        getGeolocation().then((response: any) => {
            setCountry(response.data.country_name)
            setCity(response.data.city)
        })
    }, [])

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(null)
        setName(e.currentTarget.value) // need to fix
    }

    const addUser = () => {
        if (name.trim() !== '') {
            alert(`Hello ${name}!`) // need to fix
            addUserCallback(name.trim(), country, city)
            setName('')
        } else {
            setError('Field is required!')
        }
    }

    const totalUsers = users.length; // need to fix

    return (
      <Greeting
        users={users}
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
      />
    )
}

export default GreetingContainer
