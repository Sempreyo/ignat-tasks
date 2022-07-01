import React from 'react'
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';

const messageData = {
	avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
	name: 'Manager',
	message: 'Hello, is it Mark? Have we met before?',
	time: '22:00',
}

const messageData2 = {
	name: 'Director',
	message: 'I am indeed! And you must be James? Thank you for joining us in our studio today!',
	time: '22:04',
}

function HW1() {
	return (
		<div>
			<Message
				avatar={messageData.avatar}
				name={messageData.name}
				message={messageData.message}
				time={messageData.time}
			/>

			<AlternativeMessage
				name={messageData2.name}
				message={messageData2.message}
				time={messageData2.time}
			/>
		</div>
	)
}

export default HW1
