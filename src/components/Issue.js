import React, { useState } from "react";
import EditFormContainer from './EditFormContainer';
import Modal from "./Modal";


export default function Issue({
  issue,
  currentIssueId,
  setCurrentIssue,
  data,
  setData,
  section,
  dragStartHandler,
  dropHandler,
}) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // [DRAG] when moved from over another card
  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  // [DRAG] when release the mousebutton from holding a card
  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none";
  };

  // sets Issue expanded & !expanded
  const toggleExpand = (e) => {
    setExpanded((prev) => !prev);
  };

  // edit Issue handler
  const handleEdit = (e) => {
    e.stopPropagation();
    setShowModal((prev) => !prev);
  };

  // delete Issue handler
  const handleDelete = (e) => {
    e.stopPropagation();
    const dataToUpdate = JSON.parse(JSON.stringify(data));
    const filteredDataToUpdate = dataToUpdate.map((section) => {
      return {
        ...section,
        issues: section.issues.filter((issue) => issue.id !== currentIssueId),
      };
    });
    setData(filteredDataToUpdate);
  };

  return (
    <div
      className={`issue${expanded ? " expanded" : ""}`}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, section, issue)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDrop={(e) => dropHandler(e, section, issue)}
      onClick={() => setCurrentIssue(issue)}
    >
      <div className="arrow" onClick={toggleExpand}>
        &#9776;
      </div>
      {issue.title}
      {expanded && (
        <>
          <div className="icons">
            <span onClick={handleEdit}>&#9998;</span>
            <span onClick={handleDelete}>&#10006;</span>
          </div>
          <div className="description" draggable={false} >{issue.description}</div>
          <Modal active={showModal} setActive={setShowModal}>
            <EditFormContainer
              currentSectionId={section.id}
              data={data}
              setData={setData}
              issue={issue}
              setShowModal={setShowModal}
            />
          </Modal>
        </>
      )}
    </div>
  );
}
