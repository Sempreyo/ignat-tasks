import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
	_id: number
	name: string
	priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
	{_id: 1, name: 'React', priority: 'high'},
	{_id: 2, name: 'Anime', priority: 'low'},
	{_id: 3, name: 'Games', priority: 'low'},
	{_id: 4, name: 'Work', priority: 'high'},
	{_id: 5, name: 'Html & Css', priority: 'middle'},
	{_id: 6, name: 'React', priority: 'high'},
	{_id: 7, name: 'Anime', priority: 'low'},
	{_id: 8, name: 'Games', priority: 'low'},
	{_id: 9, name: 'Work', priority: 'high'},
	{_id: 10, name: 'Html & Css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
	if (filter === 'all') return affairs
	else return affairs.filter(item => item.priority === filter)// need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
	return affairs.filter(item => item._id !== _id)// need to fix
}

function HW2() {
	const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
	const [filter, setFilter] = useState<FilterType>('all')

	const filteredAffairs = filterAffairs(affairs, filter)
	const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

	return (
		<div>
			{/*should work (должно работать)*/}
			<Affairs
				data={filteredAffairs}
				setFilter={setFilter}
				deleteAffairCallback={deleteAffairCallback}
			/>

			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeAffairs/>*/}
		</div>
	)
}

export default HW2
