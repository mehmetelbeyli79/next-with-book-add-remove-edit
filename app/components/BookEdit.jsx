import React, { useState } from "react";

function BookEdit({ book, bookId, onEdit, handleEdit }) {
  const [editbook, setEditbook] = useState(book);

  const onSubmit = (e) => {
    e.preventDefault();
    const bookName = editbook;
    onEdit(bookId, bookName);
    handleEdit();
  };

  const handleChange = (e) => {
    setEditbook(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex justify-evenly">
        <label>Kitap Adı:</label>
        <input
          type="text"
          name="bookName"
          value={editbook}
          onChange={handleChange}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button className="btn btn-primary ml-2" type="submit">
          Değiştir
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
