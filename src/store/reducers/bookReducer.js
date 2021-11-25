import {createReducer} from '@reduxjs/toolkit';
import {addBook, deleteBook} from '../action/bookActions';

const initialState = {
    books: []
}
//Funcion con dos parametros: 1) estado inicial -> objeto. 2) F. callback
//Con Builder se pueden agregar cases a nuestro reducer (como en un condicional).
const bookReducer = createReducer(initialState, (builder) => {

    //parametros -> la accion y una funcion que recibe el state.
    builder.addCase(addBook, (state, action) =>{
        //se pushea un nuevo item al array, que se espera que sea visto en el action.payload.
        state.books.push(action.payload)
    })
    .addCase(deleteBook, (state, action ) => {
        state.books = state.books.filter(book => book.id !== action.payload.id)
    })
});

export default bookReducer