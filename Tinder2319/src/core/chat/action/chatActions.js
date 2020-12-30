import {ActionTypes} from "./chatActionTypes"
export function socketConnected(status){
    return {
        type : ActionTypes.SOCKET_CONNECTED,
        payload: { status },
    };
}

export function usersRecieved(status,users){
    return {
        type : ActionTypes.USERS_RECIEVED,
        payload: { status,users },
    };
}



export function getChatInfo(id, token){
    return {
        type : ActionTypes.GET_CHAT_INFO,
        payload: { id,token },
    };
}

export function sentToChat(id){
    return{
        type: ActionTypes.SENT_TO_CHAT,
        payload: { id },
    }
}

export function addMessage(message){
    return{
        type: ActionTypes.ADD_MESSAGE,
        payload: { message },
    }
}

export function getChat(socket, id){
    return{
        type: ActionTypes.GET_CHAT,
        payload: { socket,id },
    }
}

export function chatRecieved(messages){
    return{
        type: ActionTypes.CHAT_RECIEVED,
        payload: { messages },
    }
}

export function lastChatRecieved(messages){
    return{
        type: ActionTypes.LAST_CHAT_RECIEVED,
        payload: { messages },
    }
}


export function saveSocket(socket){
    return{
        type: ActionTypes.SAVE_SOCKET,
        payload: { socket },
    }
}


export function sendMessage(socket, message, id){
    return{
        type: ActionTypes.SEND_MESSAGE,
        payload: { socket, message, id },
    }
}

export function setChatId(id){
    return{
        type: ActionTypes.SET_CHATID,
        payload: { id },
    }
}
