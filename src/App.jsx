import React, { useState } from "react";
import { getNotes } from "./utils/notes";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Navbar from "./components/Navbar";

const App = () => {
  const [notes, setNotes] = useState(getNotes());
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    setFilteredNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const archiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const handleSearch = (term) => {
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(term.toLowerCase()) ||
        note.body.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <div className="app">
      <Navbar onSearch={handleSearch} />
      <NoteForm onAddNote={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} onArchive={archiveNote} />
    </div>
  );
};

export default App;
