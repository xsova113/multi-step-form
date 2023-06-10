"use client";

import { useSelectContext } from "../context/SelectContext";
import { stepsArray } from "../libs/constants";

const Steps = () => {
  const { isSelected, setIsSelected } = useSelectContext();

  function handleSelect(index: number) {
    setIsSelected(index);
  }

  return (
    <>
      <div className="flex flex-row md:flex-col md:gap-8 gap-5 mx-8 my-10 text-white absolute max-md:-top-[120px]">
        {stepsArray.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer gap-3 items-center group"
            onClick={() => handleSelect(index)}
          >
            <span
              className={`transition md:py-2 md:px-4 py-1 px-3 border text-lg md:text-xl border-white rounded-full  hover:border-[#BFE2FD] group-hover:text-black group-hover:bg-[#BFE2FD] ${
                isSelected === index && "text-black bg-[#BFE2FD] "
              }`}
            >
              {item.tag}
            </span>
            <div className="md:flex flex-col hidden">
              <span className="text-white/60 text-[13px]">{item.step}</span>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
