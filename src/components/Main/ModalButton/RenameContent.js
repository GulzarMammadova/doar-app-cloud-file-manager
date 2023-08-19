import React from "react";
import '../../../App.css';

export default function RenameContent(props) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <div className="title">
          <h1>Rename</h1>
        </div>
        <div className="folder-list">
          <input type="text" ></input>
        </div>
        <div className="submit">
          <div>
            <input className="submit-btn" type="submit" value="OK" />
          </div>
          <div>
            <button className="submit-btn" type="submit" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

