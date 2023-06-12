import React,{useState} from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, bookId, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  let content = <div>{book}</div>;
  if (showEdit) {
    content = <BookEdit book={book} bookId={bookId} onEdit={onEdit} setShowEdit={showEdit} handleEdit={handleEdit} />;
  }

  return (
    <div className="mr-3 border-2 border-slate-500 p-5 bg-green-50">
      <div className="flex justify-end mb-3">
        <button className="mr-3 btn btn-accent px-4 py-0" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-secondary" onClick={() => onDelete(bookId)}>Delete</button>
      </div>
      <div>
        
          <img alt="books" className="rounded-sm mb-3" src={`https://picsum.photos/seed/${bookId}/300/200`} />
        {content}
        
      </div>
    </div>
  );
}

export default BookShow;
