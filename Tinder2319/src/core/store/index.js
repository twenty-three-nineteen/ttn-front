import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/index";
import { loadState, saveState } from '../localStorage'
import chatSaga from "../chat/saga/index";
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];


if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");

  middleware.push(createLogger({ collapsed: true }));
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configStore = (initialState = {}) => {
  
  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(...middleware)
  )(createStore);
  const persistedState = loadState();
  console.log(persistedState);
  const store = createStoreWithMiddleware(reducer, persistedState);

  store.subscribe(() => {
    saveState({
      login_signup: store.getState().login_signup,
    })
  })
  sagaMiddleware.run(chatSaga);
  return store;
};

export default configStore();