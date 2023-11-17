import React from "react";

export default function Modal({selectedUser,modal}) {
  
  return (
    <div className="modal">
      <div className="overlay" onClick={modal}></div>
      <div className="modal-content" >
       CONTENT
      </div>
    </div>
  );
}
