// "use client";

// import { useSelectContext } from "@/app/context/SelectContext";
// import { planArray } from "@/app/libs/constants";
// import Image from "next/image";
// import { FieldValues, UseFormRegister } from "react-hook-form";

// interface PlanProps {
//   register: UseFormRegister<FieldValues>;
// }

// const Plan: React.FC<PlanProps> = ({ register }) => {
//   const { isSelected, subscriptions, setSubscriptions, plan, setPlan } =
//     useSelectContext();

//   return (
//     <div className={`${isSelected !== 1 && "hidden"} flex flex-col pt-10`}>
//       <div className="grid md:grid-cols-3 gap-4">
//         {planArray.map((item) => (
//           <label
//             htmlFor="plan"
//             tabIndex={0}
//             key={item.title}
//             className={`flex flex-row md:flex-col p-4 md:w-[140px] md:h-[190px]  max-md:gap-4 md:justify-between transition border hover:border-[#473DFF] cursor-pointer outline-none rounded-lg ${
//               plan === item.title && "border-[#473DFF] bg-[#FAFBFF]"
//             }`}
//             onClick={() => {
//               setPlan(item.title);
//             }}
//           >
//             <div className="relative w-[50px] h-[50px]">
//               <Image src={item.img} alt="plan-image" fill />
//             </div>
//             <div className="flex flex-col text-start">
//               <h1 className="text-xl font-medium text-[#02295d]">
//                 {item.title}
//               </h1>
//               <h3 className="text-[#9699AB]">
//                 {subscriptions === "monthly"
//                   ? item.monthlyDisplay
//                   : item.yearlyDisplay}
//               </h3>
//             </div>
//           </label>
//         ))}
//       </div>
//       <input
//         id="plan"
//         value={plan}
//         {...register("plan", { required: true })}
//         className="opacity-0 pointer-events-none"
//       />

//       <div className="flex w-full h-[50px] bg-[#FAFBFF] rounded-md justify-center items-center gap-6">
//         <span
//           className={`transition ${
//             subscriptions === "monthly"
//               ? "text-[#022d64] font-semibold"
//               : "text-[#9699AB]"
//           }`}
//         >
//           Monthly
//         </span>
//         <label
//           htmlFor="subscription"
//           className="w-[50px] h-[25px] bg-[#02295d] rounded-full flex items-center"
//           onClick={() =>
//             setSubscriptions((prev: string) =>
//               prev === "monthly" ? "yearly" : "monthly"
//             )
//           }
//         >
//           <div
//             className={`bg-white h-[15px] w-[15px] rounded-full ml-1 ${
//               subscriptions === "monthly"
//                 ? "translate-x-0"
//                 : "translate-x-[26px]"
//             } transition z-10 absolute`}
//           />
//         </label>
//         <input
//           id="subscription"
//           {...register("subscription", { required: true })}
//           type="text"
//           value={subscriptions}
//           className="opacity-0 pointer-events-none absolute -z-50"
//         />
//         <span
//           className={`transition ${
//             subscriptions === "yearly"
//               ? "text-[#022d64] font-semibold"
//               : "text-[#9699AB]"
//           }`}
//         >
//           Yearly
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Plan;
