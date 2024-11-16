import React from "react";
import Modal from "../../ui/Modal";

function OutlineButton({ children, iconSrc, iconAlt, modalContent }) {
  return (
    <React.Fragment>
      <button
        className="dark:hover:text-primaryDark dark:hover:border-primaryDark flex h-[44px] items-center justify-center gap-2 rounded-default border-[3px] border-primary px-8 font-medium text-primary transition-all duration-300 hover:shadow-lg"
        onClick={() => document.getElementById("nutritionModal").showModal()}
      >
        <span>{children}</span>
        <img src={iconSrc} alt={iconAlt} className="mb-0.5" />
      </button>
      <Modal content={modalContent} />
    </React.Fragment>
  );
}

export default OutlineButton;
