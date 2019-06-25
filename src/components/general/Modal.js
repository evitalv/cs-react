import React from "react";

function Modal(props) {
  return props.isShowing ? (
    <div className="modal-whole">
      <div className="modal-content">
        <span className="close" onClick={props.hide}>
          &times;
        </span>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Modal;
