import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-list">
      <h2>Catatan Aktif</h2>
      <div className="notes">
        {activeNotes.length > 0 ? (
          activeNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>

      <h2>Catatan Arsip</h2>
      <div className="notes">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
