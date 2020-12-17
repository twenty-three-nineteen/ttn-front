let DEBUG = false;
let HOST_URL = "http://37.152.176.51:80";// = "https://justdjango-chat.herokuapp.com";
let SOCKET_URL;// = "wss://justdjango-chat.herokuapp.com";
if (DEBUG) {
  HOST_URL = "http://localhost:8000";
}

export { HOST_URL, SOCKET_URL };