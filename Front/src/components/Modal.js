import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./styles/Modal.css";

function Modal(props) {
  console.log(props);
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  return ReactDOM.createPortal(
    <div className={showHideClassName}>
      <div className="modal-main">{props.children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
