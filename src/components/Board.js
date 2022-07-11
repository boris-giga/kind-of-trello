import React, { useState } from "react";
import Issue from "./Issue";
import { initialIssue, initialSection } from "../consts/mocks"


export default function Board({data, setData}) {
  const [sections, setSections] = useState(data);
  const [currentSection, setCurrentSection] = useState(initialSection);
  const [currentIssue, setCurrentIssue] = useState(initialIssue);

  // [DRAG] when took an Issue
  const dragStartHandler = (_e, section, issue) => {
    setCurrentSection(section);
    setCurrentIssue(issue);
  };

  // [DRAG] while dragging over another Issue
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.className.includes("issue") &&
      (e.target.style.boxShadow = "0 4px 3px gray");
  };

  // [DRAG] when drop Issue on anything
  const dropHandler = (e, section, issue) => {
    e.preventDefault();
    e.target.style.boxShadow = "none";
    const currentIssueIndex = currentSection.issues.indexOf(currentIssue);
    const dropIssueOnIndex = section.issues.indexOf(issue);
    currentSection.issues.splice(currentIssueIndex, 1);
    section.issues.splice(dropIssueOnIndex, 0, currentIssue);
    setSections(
      sections.map((s) => {
        if (s.id === section.id) return section;
        else if (s.id === currentSection.id) return currentSection;
        else return s;
      })
    );
  };

  // [DRAG] when drop Issue on a Section
  const dropIssueHandler = (e, section) => {
    e.preventDefault();
    if (!e.target.className.startsWith('issue')) {
      section.issues.push(currentIssue);
      const currentIndex = currentSection.issues.indexOf(currentIssue);
      currentSection.issues.splice(currentIndex, 1);
      setSections(
        sections.map((s) => {
          if (s.id === section.id) return section;
          if (s.id === currentSection.id) return currentSection;
          return s;
        })
      );
    }
  };

  return (
    <>
      {data.map((section) => (
        <>
        <div
          key={`column${section.id}`}
          className="section"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropIssueHandler(e, section)}
        >
          <div className="section-header">
            <div className="section-title">{section.title}</div>
          </div>
          {section.issues.map((issue) => (
            <Issue 
              key={`issue${issue.id}`}
              issue={issue}
              currentIssueId={currentIssue.id}
              setCurrentIssue={setCurrentIssue}
              data={data}
              setData={setData}
              section={section}
              dragStartHandler={dragStartHandler}
              dropHandler={dropHandler}
            />
          ))}
        </div>
        </>
      ))}
    </>
  );
}
