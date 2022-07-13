import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2';

function App() {
	return (
		<div className={s.App}>
			<div className={s.block}>
				<div className={s.title}>Homework 1</div>
				<HW1/>
			</div>
			<div className={s.block}>
				<div className={s.title}>Homework 2</div>
				<HW2/>
			</div>
			{/*<HW3/>*/}
			{/*<HW4/>*/}
			{/*<HW5/>*/}

		</div>
	)
}

export default App
