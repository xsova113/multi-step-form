import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";

interface InputProps {
  title: string;
  id: string;
  pattern: RegExp;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type: string;
}

const Input: React.FC<InputProps> = ({
  title,
  id,
  type,
  pattern,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-[#02295d]">
          {title}
        </label>
        {errors[id]?.type === "required" && (
          <span className="text-[#ED3548] text-xs font-bold">
            {errors[id]?.message?.toString()}
          </span>
        )}
        {errors[id]?.type === "minLength" && (
          <span className="text-[#ED3548] text-xs font-bold">
            {errors[id]?.message?.toString()}
          </span>
        )}
        {errors[id]?.type === "pattern" && (
          <span className="text-[#ED3548] text-xs font-bold">
            {errors[id]?.message?.toString()}
          </span>
        )}
      </div>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`border border-gray-200 transition focus:border-[#473DFF] ${
          errors[id] && "!border-[#ED3548]"
        } outline-none p-3 rounded-md text-[#02295d] font-medium`}
        {...register(id, {
          required: "This field is required",
          pattern: {
            value: pattern,
            message: "Please enter a valid email address",
          },
        })}
      />
    </div>
  );
};

export default Input;
