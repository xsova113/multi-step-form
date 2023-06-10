"use client";

import { useSelectContext } from "@/app/context/SelectContext";
import { addOnsArrays } from "@/app/libs/constants";
import { BsCheck } from "react-icons/bs";
import { UseFormRegister } from "react-hook-form";

const AddOns = ({ register }: { register: UseFormRegister<any> }) => {
  const { isSelected, subscriptions, checked, setChecked } = useSelectContext();

  function handleChecked(index: number) {
    if (checked.includes(index)) {
      setChecked(checked.filter((i: number) => index !== i));
      return;
    }
    setChecked((prev: number[]) => [...prev, index]);
  }

  return (
    <div
      className={`${isSelected !== 2 && "hidden"} flex flex-col gap-5 pt-10`}
    >
      {addOnsArrays.map((item, index) => (
        <label
          key={item.id}
          htmlFor={item.id}
          tabIndex={0}
          className={`border transition hover:border-[#473DFF] rounded-lg h-[75px] outline-none w-full flex items-center p-6 ${
            checked.includes(index) && "bg-[#FAFBFF] border-[#473DFF]"
          }`}
        >
          <div className="flex w-full items-center justify-between outline-none">
            <div className="flex gap-3 md:gap-6">
              <div className="flex items-center justify-center">
                <input
                  id={item.id}
                  type="checkbox"
                  {...register(item.id)}
                  className="flex h-[20px] w-[20px] transition rounded-[4px] checked:bg-[#473DFF] border border-gray-300 outline-none appearance-none"
                  onChange={() => handleChecked(index)}
                />
                <BsCheck
                  className={`${
                    checked.includes(index) ? "absolute" : "hidden"
                  } transition pointer-events-none fill-white`}
                />
              </div>

              <div className="flex flex-col">
                <span className="max-md:text-sm text-[#022d64] font-medium">
                  {item.title}
                </span>
                <span className="text-xs md:text-sm text-gray-400">
                  {item.subTitle}
                </span>
              </div>
            </div>

            <span className="md:text-sm text-[12px] text-[#473DFF]">
              {subscriptions === "monthly"
                ? item.cost.monthlyCost
                : item.cost.yearlyCost}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default AddOns;
