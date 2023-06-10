"use client";

import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
// import AddOns from "./components/AddOns";
import Finish from "./components/Finish";
import Buttons from "../Buttons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSelectContext } from "@/app/context/SelectContext";
import { titleArray } from "@/app/libs/constants";
import createForm from "@/app/server/createForm";
import { Toaster, toast } from "react-hot-toast";
import { runConfetti } from "@/app/libs/confetti";

const FormInput = () => {
  const {
    isSelected,
    cost,
    addOnSum,
    subscriptions,
    setIsSubmitted,
    isSubmitted,
  } = useSelectContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    await createForm({
      ...data,
      totalCost: `+$${cost && addOnSum ? cost + addOnSum : cost}/
      ${subscriptions === "monthly" ? "mo" : "yr"}`,
    })
      .then(() => {
        if (!errors.root?.message) {
          setIsSubmitted(true);
        }
      })
      .catch(() =>
        toast.error(
          "You may entered an invalid inputs or using the same information. Please try again."
        )
      )
      .finally(() => {
        if (!errors.root?.message) {
          runConfetti();
        }
      });
  };

  return (
    <>
      <Toaster />
      <div
        className={`${
          isSubmitted ? "hidden" : "flex"
        } flex-col md:w-[600px] px-6 md:px-20 pt-10 max-md:pb-10`}
      >
        <h1 className="text-[#02295d] text-3xl font-bold pb-3">
          {titleArray[isSelected].title}
        </h1>
        <h3 className="text-[15px] text-[#9699AB]">
          {titleArray[isSelected].subTitle}
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full md:justify-between"
        >
          <div>
            <PersonalInfo register={register} errors={errors} />
            <Plan register={register} />
            {/* <AddOns register={register} /> */}
            <Finish />
          </div>

          <div className="hidden md:block pb-6">
            <Buttons />
          </div>
          <div className="md:hidden block right-0 bottom-0 w-full fixed bg-white p-3">
            <Buttons />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormInput;
