import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import deskReducer from './deskSlice';
import deskListReducer from './deskListSlice';
import errorReducer from './errorSlice';
import successReducer from './successSlice';
import loadersReducer from './loadersSlice';
import userNameReducer from './userNameSlice';
import themeReducer from './themeSlice';
import createSagaMiddleware from 'redux-saga';
import sagas from '@core/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    authUID: authReducer,
    userName: userNameReducer,
    themeName: themeReducer,
    desk: deskReducer,
    deskList: deskListReducer,
    error: errorReducer,
    success: successReducer,
    loaders: loadersReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(sagas);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
