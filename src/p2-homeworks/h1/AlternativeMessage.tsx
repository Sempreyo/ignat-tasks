import React from 'react'
import cl from './Message.module.css';
import {PropsMessage} from './Message';
import avatar from '../../assets/images/avatar.jpg'

function AlternativeMessage(props: PropsMessage) {
	return (
		<div className={cl.messageAlt}>
			<div className={cl.photo}>
				<img src={avatar} alt=''/>
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

export default AlternativeMessage
