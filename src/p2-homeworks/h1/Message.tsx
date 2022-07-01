import React from 'react'
import cl from './Message.module.css';

export type PropsMessage = {
	avatar?: string
	name: string
	message: string
	time: string
}

function Message(props: PropsMessage) {
	return (
		<div className={cl.message}>
			<div className={cl.photo}>
				<img src={props.avatar} alt=''/>
			</div>
			<div className={cl.content}>
				<div className={cl.author}>{props.name}</div>
				<div className={cl.groupText}>
					<div className={cl.messageText}>{props.message}</div>
					<div className={cl.time}>{props.time}</div>
				</div>
			</div>
		</div>
	)
}

export default Message
