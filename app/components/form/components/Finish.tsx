// "use client";

// import { useSelectContext } from "@/app/context/SelectContext";
// import { addOnsArrays, planArray } from "@/app/libs/constants";
// import { useCallback, useEffect, useState } from "react";

// const Finish = () => {
//   const {
//     isSelected,
//     setIsSelected,
//     plan,
//     subscriptions,
//     checked,
//     setTotalCost,
//     cost,
//     setCost,
//     addOnSum,
//     setAddOnSum,
//   } = useSelectContext();
//   const [costDisplay, setCostDisplay] = useState<string>();

//   const getCost = useCallback(() => {
//     switch (plan) {
//       case "Arcade":
//         if (subscriptions === "monthly") {
//           setCostDisplay(planArray[0].monthlyDisplay);
//           setCost(9);
//         } else {
//           setCostDisplay(planArray[0].yearlyDisplay);
//           setCost(90);
//         }
//         break;
//       case "Advanced":
//         if (subscriptions === "monthly") {
//           setCostDisplay(planArray[1].monthlyDisplay);
//           setCost(12);
//         } else {
//           setCostDisplay(planArray[1].yearlyDisplay);
//           setCost(120);
//         }
//         break;
//       case "Pro":
//         if (subscriptions === "monthly") {
//           setCostDisplay(planArray[2].monthlyDisplay);
//           setCost(15);
//         } else {
//           setCostDisplay(planArray[2].yearlyDisplay);
//           setCost(150);
//         }
//         break;

//       default:
//         break;
//     }
//   }, [plan, subscriptions, setCost]);

//   const getTotalAddOnCost = useCallback(() => {
//     let monthlySum = 0;
//     let yearlySum = 0;
//     checked.forEach((i: number) => {
//       const monthlyCost = addOnsArrays[i].cost.monthlyCost.charAt(2);
//       const yearlyCost =
//         addOnsArrays[i].cost.yearlyCost.charAt(2) +
//         addOnsArrays[i].cost.yearlyCost.charAt(3);

//       monthlySum += Number(monthlyCost);
//       yearlySum += Number(yearlyCost);
//     });
//     if (subscriptions === "monthly") return monthlySum;
//     if (subscriptions === "yearly") return yearlySum;
//   }, [checked, subscriptions]);

//   useEffect(() => {
//     getCost();
//     const sum = getTotalAddOnCost();
//     setAddOnSum(sum);
//   }, [
//     plan,
//     subscriptions,
//     checked,
//     getCost,
//     getTotalAddOnCost,
//     addOnSum,
//     cost,
//     setTotalCost,
//     setAddOnSum,
//   ]);

//   return (
//     <div className={`${isSelected !== 3 && "hidden"} flex flex-col pt-10`}>
//       <div className="flex flex-col bg-[#FAFBFF] rounded-lg p-4">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col items-start">
//             <h1 className="text-[#02295d] font-medium">
//               {plan + `(${subscriptions === "monthly" ? "Monthly" : "Yearly"})`}
//             </h1>
//             <button
//               className="underline text-gray-400"
//               onClick={() => setIsSelected(1)}
//             >
//               Change
//             </button>
//           </div>
//           <span className="text-[#02295d] font-semibold">{costDisplay}</span>
//         </div>

//         <hr className="my-7" />

//         {checked.map((item: number) => (
//           <div key={item} className="flex justify-between">
//             <h1 className="text-gray-400">{addOnsArrays[item].title}</h1>
//             <span className="text-[#02295d]">
//               {subscriptions === "monthly"
//                 ? addOnsArrays[item].cost.monthlyCost
//                 : addOnsArrays[item].cost.yearlyCost}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex p-4 justify-between">
//         <h1 className="text-gray-400">
//           Total&nbsp;({subscriptions === "monthly" ? "per month" : "per year"})
//         </h1>
//         <span className="text-[#473DFF] text-2xl font-semibold">
//           +${cost && addOnSum ? cost + addOnSum : cost}/
//           {subscriptions === "monthly" ? "mo" : "yr"}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Finish;
