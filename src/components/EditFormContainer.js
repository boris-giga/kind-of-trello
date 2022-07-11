import React, { useState } from "react";
import EditForm from "./EditForm";


export default function EditFormContainer({
  data,
  setData,
  issue,
  setShowModal,
  currentSectionId,
}) {
  const [updatedIssue, setUpdatedIssue] = useState(issue);

  // sets input data to corresponding fields in editing Issue
  const handleChange = (e) => {
    setUpdatedIssue({ ...updatedIssue, [e.target.name]: e.target.value });
  };

  // saves new data to editing Issue
  const handleSave = () => {
    const dataToUpdate = JSON.parse(JSON.stringify(data));
    const filteredUpdatedData = dataToUpdate.map((section) => {
      if (section.id === currentSectionId)
        return {
          ...section,
          issues: [
            updatedIssue,
            ...section.issues.filter((issue) => issue.id !== updatedIssue.id),
          ],
        };
      return {
        ...section,
        issues: [
          ...section.issues.filter((issue) => issue.id !== updatedIssue.id),
        ],
      };
    });
    setData(filteredUpdatedData);
    setShowModal(false);
  };

  // closes Modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <EditForm
      handleChange={handleChange}
      issue={updatedIssue}
      handleSave={handleSave}
      closeModal={handleClose}
    />
  );
}
