"use client";
import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [bookName, setBookName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(bookName);
    setBookName("");
  };
  return (
    <div className="flex justify-center items-center  p-12">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <label
          className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
          htmlFor="kitap"
        >
          Kitap Giriniz
        </label>
        <input
          type="text"
          id="kitap"
          placeholder="Kitap İsmi Yaz"
          className="input w-full "
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button className="btn btn-secondary btn-block mt-3">EKLE</button>
      </form>
    </div>
  );
}

export default BookCreate;
