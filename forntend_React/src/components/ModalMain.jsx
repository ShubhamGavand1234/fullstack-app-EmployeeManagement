import React, { useState } from "react";
import { createPortal } from "react-dom";
import MyModal from "./MyModal"; // Import MyModal from its own file.

function ModalMain() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <MyModal onClose={closeModal} />}
    </>
  );
}

export default ModalMain;
