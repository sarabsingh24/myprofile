import rootReducer from './reducer/CombineReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
});

export { store };