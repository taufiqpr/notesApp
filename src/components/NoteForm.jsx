import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 50) {
      setTitle(input);
      setRemainingChars(50 - input.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const formattedDate = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      onAddNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: formattedDate,
      });

      setTitle("");
      setBody("");
      setRemainingChars(50);
    }
  };

  return (
    <div className="note-form">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmit}>
        <p>Sisa karakter: {remainingChars}</p>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        <textarea
          placeholder="Tuliskan catatanmu di sini ..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">
          Buat
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
