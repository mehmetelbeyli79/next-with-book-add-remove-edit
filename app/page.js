"use client";
import Image from "next/image";
import BookCreate from "./components/BookCreate";
import { useState } from "react";
import BookList from "./components/BookList";
export default function Home() {
  const [books, setBooks] = useState([]);
  const onSubmitCreate = (book) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random()*1000), bookName: book },
    ];
    setBooks(updatedBooks);
    console.log(books);
  };
  const onDelete=(id)=>{
    const deleteBook=books.filter((book)=>book.id!==id)
    setBooks(deleteBook);
  }
  const onEdit=(id,bookName)=>{
    const editBook=books.map((book)=>{
      if(book.id===id){
        return {...book,bookName:bookName}
      }
      return book;
    })
    setBooks(editBook);
  }
  return (
    <main className="bg-pink-50">
      <BookCreate onCreate={onSubmitCreate} />
      <BookList books={books} onDelete={onDelete} onEdit={onEdit}/>
    </main>
  );
}
