// "use client";

// import { useSelectContext } from "@/app/context/SelectContext";
// import Input from "./Input";
// import { inputObj } from "@/app/libs/constants";
// import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

// interface PersonalInfoProps {
//   register: UseFormRegister<FieldValues>;
//   errors: FieldErrors;
// }

// const PersonalInfo: React.FC<PersonalInfoProps> = ({ register, errors }) => {
//   const { isSelected } = useSelectContext();

//   return (
//     <div className={`${isSelected !== 0 && "hidden"} block`}>
//       <div className="flex flex-col pt-10 gap-6">
//         <Input
//           pattern={/(.*?)/}
//           title={inputObj.name}
//           id="name"
//           type="text"
//           placeholder={inputObj.namePlaceholder}
//           register={register}
//           errors={errors}
//         />
//         <Input
//           pattern={
//             /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//           }
//           title={inputObj.email}
//           type="email"
//           id="email"
//           placeholder={inputObj.emailPlaceholder}
//           register={register}
//           errors={errors}
//         />
//         <Input
//           pattern={/(.*?)/}
//           title={inputObj.phone}
//           type="tel"
//           id="phone"
//           placeholder={inputObj.phonePlaceholder}
//           register={register}
//           errors={errors}
//         />
//       </div>
//     </div>
//   );
// };

// export default PersonalInfo;
