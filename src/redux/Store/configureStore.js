import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../Reducer/combined";
import history from "./history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

export default preloadedState => {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware, thunk, logger)
    )
  );

  return store;
};
