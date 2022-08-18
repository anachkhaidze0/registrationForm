import { useFormContext } from "react-hook-form"
import { classNames } from "../lib/helper";
import { ReactComponent as Icon } from "../images/icon-error.svg"


const Input = ({placeholder, id, type, name, readOnly = false, validation, ...rest}) => {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    return(
        <div className="p-3 flex flex-col justify-center ">
           <input
                {...register(id, validation)}
                {...rest}
                name={id}
                id={id}
                readOnly={readOnly}
                className={classNames(
                    readOnly
                    ? "border border-[#b9b6d3] p-3 w-full rounded-md text-xs font-semibold text-gray-800 placeholder:text-xs placeholder:font-bold placeholder:text-gray-500 focus:outline-black focus:outline focus: outline-1 lg:p-4"
                    : errors[id]
                    ? "border border-[#ff7a7a] p-3 w-full rounded-md text-xs font-semibold text-gray-800 placeholder:text-xs placeholder:font-bold placeholder:text-gray-500 focus:outline-[#ff7a7a] focus:outline focus: outline-1 lg:p-4"
                    : "border border-[#b9b6d3] p-3 w-full rounded-md text-xs font-semibold text-gray-800 placeholder:text-xs placeholder:font-bold placeholder:text-gray-500 focus:outline-black focus:outline focus: outline-1 lg:p-4",
                    "block"
                )}
                type={type}
                placeholder={placeholder}
                aria-describedby={id}
    
            />

            {errors[id] && (
                <div className="flex justify-end space-x-2 relative">
                    <p className="text-[#ff7a7a] text-xs">{name} cannot be empty</p>
                    <Icon className="absolute -top-9 right-5"/>
                </div>
            )}
        </div>
    )
}

export default Input