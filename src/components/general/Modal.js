import React from "react";

function Modal(props) {

  function handleClick() {
    props.hide();
    if (props.clear) props.clear();
  }

  return props.isShowing ? (
    <div className="modal-whole">
      <div className="modal-content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  ) : null;
}

export default Modal;
