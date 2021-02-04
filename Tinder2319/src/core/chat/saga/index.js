import "regenerator-runtime/runtime";
import {ActionTypes} from "../action/chatActionTypes";
import { put, takeLatest, all, takeEvery ,call} from 'redux-saga/effects';
import {HOST_URL} from '../../servers';
import axios from 'axios';
function* fetchChat(params) {
  console.log('fetch');
  const socket =params.payload.socket;
  		socket.send(JSON.stringify({
			command: 'fetch_messages',
			chatId: params.payload.id,
		}))
}

function* fetchPrevMessages(params) {
  console.log('fetch prev');
  const socket =params.payload.socket;
  		socket.send(JSON.stringify({
			command: 'fetch_messages',
      chatId: params.payload.id,
      loaded_messages_number: params.payload.loadedNumber,
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

function* fetchInfo(params) {
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
   yield put({ type: ActionTypes.INFO_RECIEVED, payload:
    {status: true,
      date:response.data.created_date,
      op: (response.data.opening_message)? response.data.opening_message:undefined,
      users:response.data.participants,
    usersParsed:response.data.participants.reduce(
      (a,b)=> (a[b.username]=
        {
          username:b.username,
          name:b.name,
          avatar:b.avatar,
          in:true,
        }
        ,a)
      ,
      {}
    )
    ,} }
    
    )
  }
  catch(error){
    console.log(error);
  }  
}


function* actionWatcher() {
 
    yield takeLatest(ActionTypes.GET_CHAT, fetchChat)
    yield takeLatest(ActionTypes.GET_PREV_MSG, fetchPrevMessages)
    yield takeLatest(ActionTypes.GET_CHAT_INFO, fetchInfo)
    yield takeEvery(ActionTypes.SEND_MESSAGE, sendMessage)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}