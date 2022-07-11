import React, { useState } from "react";
import EditForm from "./EditForm";


export default function AddFormContainer({
  data,
  setData,
  setShowModal,
  initialIssue,
}) {
  const [newIssue, setNewIssue] = useState(initialIssue);

  // sets input data to corresponding fields in new Issue
  const handleChange = (e) => {
    setNewIssue({
      ...newIssue,
      [e.target.name]: e.target.value,
      id: `${Date.now()}`,
    });
  };

  // creates new Issue from filled inputs
  const handleSave = () => {
    if (newIssue.title) {
      const updatedData = [...data];
      updatedData[0].issues.splice(0, 0, newIssue);
      setData(updatedData);
      setNewIssue(initialIssue);
      setShowModal(false);
    }
  };

  // closes modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <EditForm
      handleChange={handleChange}
      issue={newIssue}
      handleSave={handleSave}
      closeModal={handleClose}
    />
  );
}
