import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

// types
export type UserType = {
	_id: string // need to fix any
	name: string // need to fix any
	country: string
	city: string
}

// уровень работы с глобальными данными
function HW3() {
	const [users, setUsers] = useState<UserType[]>([]) // need to fix any

	const addUserCallback = (name: string, country: string, city: string) => { // need to fix any
		setUsers([
			...users,
			{
				_id: v1(),
				name: name,
				country: country,
				city: city
			}
		]) // need to fix
	}

	return (
		<div>
			{/*should work (должно работать)*/}
			<GreetingContainer users={users} addUserCallback={addUserCallback}/>

			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeGreeting/>*/}
		</div>
	)
}

export default HW3
