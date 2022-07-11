import React, { useState } from "react";
import "./App.css"
import Board from "./components/Board";
import Modal from './components/Modal';
import AddFormContainer from './components/AddFormContainer';
import { mockData, initialIssue } from "./consts/mocks";


export default function App() {
  const [data, setData] = useState(mockData)
  const [showModal, setShowModal] = useState(false)

  return (
      <div className="App">
        <p>{`click to add new issue >  `}</p>
        <div className="plus" onClick={() => setShowModal(true)}>
          +
        </div>
        <Modal active={showModal} setActive={setShowModal}>
          <AddFormContainer
            data={data}
            setData={setData}
            setShowModal={setShowModal}
            initialIssue={initialIssue}
          />
        </Modal>
        <Board data={data} setData={setData} />
      </div>
  );
}
