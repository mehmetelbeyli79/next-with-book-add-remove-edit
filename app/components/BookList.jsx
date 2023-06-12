import React from 'react'
import BookShow from './BookShow'

function BookList({books,onDelete,onEdit}) {
    const renderedBooks = books.map((book) => {
        return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} bookId={book.id} book={book.bookName}/>
    })
  return (
    <div className='flex flex-wrap p-5 '>
        {renderedBooks}
    </div>
  )
}

export default BookList