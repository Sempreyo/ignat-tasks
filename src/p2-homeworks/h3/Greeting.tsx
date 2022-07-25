import React from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
	users: UserType[]
	name: string // need to fix any
	setName: (value: string) => void
	addUser: () => void // need to fix any
	error: string // need to fix any
	totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{users, name, setName, addUser, error, totalUsers} // деструктуризация пропсов
) => {
	return (
		<div className={`container ${s.container}`}>
			<SuperInputText
				value={name}
				onChangeText={setName}
				onEnter={addUser}
				error={error}
			/>
			<SuperButton onClick={addUser} className={s.addBtn}>Add</SuperButton>
			{/*<button className='btn' onClick={addUser}>Add</button>*/}
			<div className={s.totalUsers}>
				Количество новых пользователей: <span>{totalUsers}</span>
			</div>
			<ol className={s.usersList}>
				{
					users.map(user => {
						return (
							<li key={user._id}>
								<p>{user.name}</p>
								<p>{`Вы находитесь в ${user.country}, ${user.city}`}</p>
								<p>Оставайтесь на месте, за вами уже выехали</p>
							</li>
						)
					})
				}
			</ol>
		</div>
	)
}

export default Greeting
