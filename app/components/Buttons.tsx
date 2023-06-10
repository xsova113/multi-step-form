"use client";

import React, { useEffect, useState } from "react";
import { useSelectContext } from "../context/SelectContext";

const Buttons = () => {
  const { isSelected, setIsSelected } = useSelectContext();
  const [buttonLabel, setButtonLabel] = useState<"Confirm" | "Next Step">(
    "Next Step"
  );

  const handleNextStep = () => {
    if (isSelected === 3) return;
    setIsSelected((prev: number) => ++prev);
  };

  const handleGoBack = () => {
    if (isSelected === 0) return;
    setIsSelected((prev: number) => --prev);
  };

  useEffect(() => {
    if (isSelected === 3) {
      setButtonLabel("Confirm");
    } else {
      setButtonLabel("Next Step");
    }
  }, [isSelected]);

  return (
    <>
      <div className="hidden md:flex justify-between mt-20">
        <button
          className={`${
            isSelected === 0 && "opacity-0"
          } text-[#9699AB] font-medium transition hover:text-[#02295d]`}
          disabled={isSelected === 0}
          onClick={handleGoBack}
          type="button"
        >
          Go Back
        </button>
        <button
          type={buttonLabel === "Confirm" ? "submit" : "button"}
          className={`py-3 text-white w-[29%] bg-[#02295d] hover:bg-[#174a8b] transition rounded-lg  ${
            buttonLabel === "Confirm"
              ? "bg-[#473DFF] hover:bg-[#473DFF]/90"
              : "bg-[#02295d] hover:bg-[#174a8b]"
          }`}
          onClick={handleNextStep}
        >
          {buttonLabel}
        </button>
      </div>

      {/******* Small screen button *******/}
      <div className="md:hidden w-full flex justify-between">
        <button
          className={`${
            isSelected === 0 && "opacity-0"
          } text-[#9699AB] transition hover:text-[#02295d]`}
          disabled={isSelected === 0}
          onClick={handleGoBack}
          type="button"
        >
          Go Back
        </button>
        <button
          type={buttonLabel === "Confirm" ? "submit" : "button"}
          className={`py-3 mx-3 transition text-white w-[29%] rounded-lg ${
            buttonLabel === "Confirm"
              ? "bg-[#473DFF] hover:bg-[#473DFF]/80"
              : "bg-[#02295d] hover:bg-[#174a8b]"
          }`}
          onClick={handleNextStep}
        >
          {buttonLabel}
        </button>
      </div>
    </>
  );
};

export default Buttons;
