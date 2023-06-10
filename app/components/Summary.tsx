"use client";

import { useSelectContext } from "@/app/context/SelectContext";
import Image from "next/image";

const Summary = () => {
  const { isSubmitted } = useSelectContext();

  return (
    <div
      className={`${
        isSubmitted ? "flex" : "hidden"
      } flex-col md:w-[600px] justify-center items-center text-center`}
    >
      <div className="md:w-[100px] w-[50px] md:h-[100px] h-[50px] mt-20 relative mb-8">
        <Image
          src={"/assets/images/icon-thank-you.svg"}
          fill
          alt="thankyou-icon"
        />
      </div>
      <h1 className="mb-4 text-[#02295d] md:text-4xl text-2xl font-bold">
        Thank you!
      </h1>
      <p className="md:mx-20 mx-4 text-sm md:text-base text-gray-400 pb-20">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Summary;
