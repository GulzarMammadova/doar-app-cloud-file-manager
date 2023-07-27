import React from "react";
import "../../../App.css";

export default function ModalShareContent(props) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <div className="title">
          <h1>Copy Item to</h1>
          <span>Please select a folder</span>
        </div>
        <div className="folder-list"></div>

        <div className="submit">
          <div>
            <input className="submit-btn" type="submit" value="Submit" />
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
