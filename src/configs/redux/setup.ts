import { Action, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PersistConfig, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import rootReducer from "./store";

/**
 * * setup redux persist
 *
 * @see https://redux-toolkit.js.org/usage/usage-guide
 */

const persistConfig: PersistConfig<any> = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "config"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    serializableCheck: {
      //! NEED TO IGNORE thunk action as well
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export { store, persistor };
