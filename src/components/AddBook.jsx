import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../features/books/Bookslice.js";

const AddBook = () => {
  const navigate = useNavigate()
  const booklenght = useSelector((state) => state.bookReducer.books.length);
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    name: "",
    author: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: booklenght + 1, ...book };
    console.log(newBook);
    dispatch(addBook(newBook));
    navigate('/')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Book Name</label>
          <input
            onChange={(e) =>
              setBook({ ...book, [e.target.name]: e.target.value })
            }
            name="name"
            required
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="author">Book Author</label>
          <input
            onChange={(e) =>
              setBook({ ...book, [e.target.name]: e.target.value })
            }
            name="author"
            required
            type="text"
            id="author"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddBook;
