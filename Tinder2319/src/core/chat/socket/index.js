import *  as actionTypes from '../action/chatActionTypes';
import {addUser, chatRecieved } from '../action/chatActions';
import {SOCKET_URL} from '../../servers';
export function setupSocket (handleCommand, token) {//
	
	// console.log("token:",token);
	const socket = new WebSocket(`${SOCKET_URL}/ws/chat/?token=${token}`)

	socket.onopen = () => {
	}
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data);
		console.log("data",data);
		handleCommand(data);
	}
	return socket
}

export function waitForSocketConnection (socket,callback){
	setTimeout(
		function () {
			if (socket.readyState === 1) {
				console.log("Connection is made")
				if (callback != null){
					callback(socket);
				}
			} else {
				console.log("wait for connection...")
				waitForSocketConnection(socket,callback);
			}

		}, 500); // wait 500 milisecond for the connection...
}