import React from "react";

const NoteCard = ({ note, onDelete, onArchive }) => {
  return (
    <div className={`note-card ${note.archived ? "archived" : ""}`}>
      <h3>{note.title}</h3>
      <p>
        {new Date(note.createdAt).toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>{note.body}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
      <button onClick={() => onArchive(note.id)}>
        {note.archived ? "Kembalikan" : "Arsipkan"}
      </button>
    </div>
  );
};

export default NoteCard;
