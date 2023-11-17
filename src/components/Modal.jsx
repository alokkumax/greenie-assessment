import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Modal({selectedUser,modal}) {
  
  return (
    <div className="modal">
      <div className="overlay" onClick={modal}></div>
      <div className="modal-content" >
       <div className="modal__row">
            <div className="modal__col">
                <span className="modal__username">{selectedUser.name}</span>
                <span className="modal__date">Joined on - {selectedUser.date}</span>
            </div>
            <span className="modal__id">#{selectedUser.id}</span>
       </div>
       <div className="modal__row">
            <div className="modal__col">
                <span className="modal__action"><MdCall/>{selectedUser.phone}</span>
                <span className="modal__action"><MdEmail/>{selectedUser.email}</span>
            </div>
            <button className="btn" onClick={modal}>
                close
            </button>
       </div>
      </div>
    </div>
  );
}
