import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import HW1 from '../h1/HW1';
import HW2 from '../h2/HW2';
import HW3 from '../h3/HW3';
import HW4 from '../h4/HW4';
import Error404 from '../h5/pages/Error404';
import PreJunior from './pages/PreJunior';
import s from './Pages.module.css'

export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	HW1: 'hw1',
	HW2: 'hw2',
	HW3: 'hw3',
	HW4: 'hw4',
	// add paths
}

function Pages() {
	return (
		<div className={s.pages}>
			{/*Routes выбирает первый подходящий роут*/}
			<Routes>
				{/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
				<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
				<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
				<Route path={PATH.HW1} element={<HW1/>}/>
				<Route path={PATH.HW2} element={<HW2/>}/>
				<Route path={PATH.HW3} element={<HW3/>}/>
				<Route path={PATH.HW4} element={<HW4/>}/>
				{/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
				<Route path={'/*'} element={<Error404/>}/>
			</Routes>
		</div>
	)
}

export default Pages
