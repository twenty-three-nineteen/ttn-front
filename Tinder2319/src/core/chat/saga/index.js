import "regenerator-runtime/runtime";
import {ActionTypes} from "../action/chatActionTypes";
import { put, takeLatest, all, takeEvery ,call} from 'redux-saga/effects';
import {HOST_URL} from '../../servers';
import axios from 'axios';
function* fetchChat(params) {
  const socket =params.payload.socket;
  		socket.send(JSON.stringify({
			command: 'fetch_messages',
			chatId: params.payload.id,
		}))
}

function* sendMessage(params) {
  const socket =params.payload.socket;
  		socket.send(JSON.stringify({
			command: 'new_message',
      chatId: params.payload.id,
      message: params.payload.message,
      
		}))
}

function* fetchUsers(params) {
  const id = params.payload.id;
  const token = params.payload.token;
  try{
    const response = yield call (()=>
    axios.get(`${HOST_URL}/api/chat/${id}`,
    {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type':'application/json',
      }
   }) )
   yield put({ type: ActionTypes.USERS_RECIEVED, payload:{status: true,users:response.data.participants,} })
  }
  catch(error){
    console.log(error);
  }  
}


function* actionWatcher() {
 
    yield takeLatest(ActionTypes.GET_CHAT, fetchChat)
    yield takeLatest(ActionTypes.GET_CHAT_USERS, fetchUsers)
    yield takeEvery(ActionTypes.SEND_MESSAGE, sendMessage)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}