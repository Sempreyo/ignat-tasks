import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages'
import s from './Header.module.css'

function Header() {
	return (
		<header className={s.header}>
			<div className="container">
				<nav>
					<li>
						<NavLink
							className={({isActive}) => `${s.link} ${isActive ? s.active : ''}`}
							to={PATH.HW1}>
							Homework 1
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({isActive}) => `${s.link} ${isActive ? s.active : ''}`}
							to={PATH.HW2}>
							Homework 2
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({isActive}) => `${s.link} ${isActive ? s.active : ''}`}
							to={PATH.HW3}>
							Homework 3
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({isActive}) => `${s.link} ${isActive ? s.active : ''}`}
							to={PATH.HW4}>
							Homework 4
						</NavLink>
					</li>
				</nav>
			</div>
		</header>
	)
}

export default Header
