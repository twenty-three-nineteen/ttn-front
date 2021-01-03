
let DEBUG = false;

let HOST_URL = "http://mytunepal.ir";// = "https://justdjango-chat.herokuapp.com";
let SOCKET_URL="wss://mytunepal.ir";// = "wss://justdjango-chat.herokuapp.com";
if (DEBUG) {
  HOST_URL = "http://localhost:8000";
  SOCKET_URL="ws://localhost:8000";
}

export { HOST_URL, SOCKET_URL };