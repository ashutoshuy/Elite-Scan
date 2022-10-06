import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <header style={{fontSize:"2.3em"}} className="App-header">Elite Scanner</header>
      <body className="App-body">
        <div className="first-section">
          <div className="first-section-left">
            <h1 style={{ fontSize: "4rem" }}>
              Free Vulnerability Scanning & Penetration <br /> Testing Tool
            </h1>
            <h3 style={{ width: "70vw" }}>
              Elite-Scan provides FREE, easy-to-use tools for IT security teams
              to perform vulnerability assessments for web applications
              automatically and reliably. Protect current web assets by staying
              ahead of the cybersecurity game.
            </h3>
            <div className="input-div">
              <input className="input-field" placeholder="e.g. www.example.com" type="domain"></input>
            </div>
            <button onClick={toggleModal} className="submit-button" >Submit</button>
            
          </div>
        </div>
        <div className="second-section">this is second section</div>
        <div className="third-section">this is third section </div>
        <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
            >
              <div>hey there , this is my modal used for testign page</div>
              <button onClick={toggleModal}>Close modal</button>
            </Modal>
      </body>
      <footer className="App-footer">this is footer</footer>
    </div>
  );
}
export default App;