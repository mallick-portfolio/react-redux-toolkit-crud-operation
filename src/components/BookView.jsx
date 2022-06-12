import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {deleteBook} from '../features/books/Bookslice.js'
const BookView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch()

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>
                  <button>edit</button>
                  <button onClick={()=> dispatch(deleteBook(book.id))}>delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookView;
