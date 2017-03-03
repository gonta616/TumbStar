import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import persist from 'redux-persist';
import saga from 'redux-saga';
import reducers from './reducers';

export default (initialState = {}) => {
    let middleware = applyMiddleware(logger, persist, saga, );

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
          middleware = compose(middleware, devToolsExtension());
        }
    }
    const store = createStore(reducers, initialState, middleware);

      if (module.hot) {
        module.hot.accept('./reducers', () => {
          store.replaceReducer(require('./reducers').default);
        });
      }

      return store;
});
