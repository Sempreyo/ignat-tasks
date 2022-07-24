import React, {useEffect, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';
import {getGeolocation} from '../../api/api';

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string, country: string, city: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const error = name ? '' : 'Field is required!'

    useEffect(() => {
        getGeolocation().then((response: any) => {
            setCountry(response.data.country_name)
            setCity(response.data.city)
        })
    }, [])

    const addUser = () => {
        if (name.trim() !== '') {
            alert(`Hello ${name}!`) // need to fix
            addUserCallback(name.trim(), country, city)
            setName('')
        }
    }

    const totalUsers = users.length; // need to fix

    return (
      <Greeting
        users={users}
        name={name}
        setName={setName}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
      />
    )
}

export default GreetingContainer
