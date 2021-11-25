import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/slices/bookSlice";
//libreria que permite genera un id aleatorio.
import {nanoid} from 'nanoid';

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("5");

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    //dispatch la accion para añadir un libro.
    dispatch(addBook({
      title,
      author,
      rating,
      id: nanoid(),
    }))
  };

  return (
    <form className="add-book">
      <div>
        <label htmlFor="title">Titulo</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="author">Autor</label>
        <input
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="author">Rating</label>
        <input
          type="number"
          min="1"
          max="10"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button onClick={addBookHandler}>Agregar Libro</button>
    </form>
  );
};

export default AddBook;
