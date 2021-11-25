//En store.js se guardan los estados de React.
import {configureStore} from '@reduxjs/toolkit';
//Impotar los reducers al store (Reducer -> Actions -> store)
import bookReducer from './slices/bookSlice';

//Debe tener un parametro obligatorio -> reducer que será un objeto.
const store = configureStore({
    reducer: {books: bookReducer }
})

export default store;