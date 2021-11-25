//Crear una acción.
import { createAction } from "@reduxjs/toolkit";

//Se deben crear cada una de las acciones utilizadas en el reducer. -> exportarlas.
export const addBook = createAction('addBook');
export const deleteBook = createAction('deleteBook');