import React, {ChangeEvent, KeyboardEvent, MouseEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3';
import {ErrorType} from './GreetingContainer';

type GreetingPropsType = {
    users: UserType[]
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: ErrorType // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {users, name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        addUser()
      }
    }

    return (
        <div className={`container ${s.container}`}>
            <div className={s.field}>
              <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
              <span className={s.errorMsg}>{error}</span>
            </div>
            <button className='btn' onClick={addUser}>Add</button>
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
