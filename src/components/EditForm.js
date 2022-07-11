import React from "react";

export default function EditForm({
  handleChange,
  issue,
  handleSave,
  closeModal,
}) {
  return (
    <div className="add-form">
      <p>Title:</p>
      <input
        onChange={handleChange}
        name="title"
        type="text"
        className="input"
        value={issue.title}
      />
      <p>Description:</p>
      <textarea
        onChange={handleChange}
        name="description"
        className="input"
        value={issue.description}
      />
      <div className="button-section">
        <button onClick={handleSave}>save</button>
        <button onClick={closeModal}>cancel</button>
      </div>
    </div>
  );
}
