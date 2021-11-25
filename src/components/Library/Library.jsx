import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from '../../store/slices/bookSlice';


const Library = () => {
  const dispatch = useDispatch();
  const deleteBookHandler = (id) => {
    //despacha la acción de borrar un libro desde -> dispacth otorga funcionalidad al botón.
    dispatch(deleteBook({id: id}))
  };

  const books = useSelector(state => state.books.books);
  const booksTable = books.map((book) => (
   <tr>
     <td>{book.title}</td>
     <td>{book.author}</td>
     <td>{book.rating}</td>
     <td>
       <button className='delete' onClick={() => deleteBookHandler(book.id)}> 
        x 
       </button>
     </td>
  </tr>
  ));

  return (
    <div className="library">
      <h2>Biblioteca</h2>
      <table>
        <tbody>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Rating</th>
        </tr>
          {booksTable}
        </tbody>
      </table>
    </div>
  );
};

export default Library;
