import { createStore } from 'redux';
import serviceReducer from '../reducers/serviceReducer';

const store = createStore(serviceReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;