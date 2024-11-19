import React from "react";
import Modal from "../../ui/Modal";

function OutlineButton({ children, iconSrc, iconAlt, modalContent }) {
  return (
    <React.Fragment>
      <button
        className="xs:px-3 flex h-[44px] items-center justify-center gap-2 rounded-default border-[3px] border-primary px-8 font-medium text-primary transition-all duration-300 hover:shadow-lg sm:h-[40px] sm:px-7 sm:text-sm dark:hover:border-primaryDark dark:hover:text-primaryDark"
        onClick={() => document.getElementById("nutritionModal").showModal()}
      >
        <span>{children}</span>
        <img src={iconSrc} alt={iconAlt} className="mb-0.5 sm:scale-90" />
      </button>
      <Modal content={modalContent} id="nutritionModal" />
    </React.Fragment>
  );
}

export default OutlineButton;
