import * as yup from "yup";
import Input from "./input";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    firstName: yup.string().required('cannot be mt'),
    lastName: yup.string().required('cannot be'),
    email: yup.string().email().required(),
    password: yup.string().required().min(8, "Password must be 8 characters")
})

const Form = () => {
    const methods = useForm({ mode: 'onTouched', resolver: yupResolver(schema)})
    const {handleSubmit} = methods

    const onSubmit = (data) => {
        return data
    }

    return(
        <div className="flex justify-center mt-4">
           <FormProvider {...methods}>
           <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-4/5 rounded-xl p-2 md:w-2/3 drop-shadow-[0_8px_2px_rgba(0,0,0,0.2)]">
                <div>
                    <Input id={"firstName"} name={"First Name"} type={'text'} placeholder={'First Name'} />
                    <Input id={"lastName"} name={"Last Name"} type={'text'} placeholder={'Last Name'}/>
                    <Input id={"email"} name={"Email"} type={'email'} placeholder={'Email Address'} />  
                    <Input id={"password"} name={"Password"} type={'password'} placeholder={'Password'}/>  
                </div>
                <div className="flex justify-center">
                    <input type="submit" className="bg-[#38cc8c] text-white uppercase w-11/12 mt-2 py-3 text-xs font-semibold rounded-md md:w-full m-3 lg:py-4 hover:bg-opacity-70" value="Claim your free trial" />
                </div>
                <div className="text-center mt-2 mx-3">
                    <p className="text-[0.6rem] text-gray-400">By clicking the button, you are agreeing to our <span className="text-[#ff7a7a]">Terms and Services</span></p>
                </div>
            </form>
           </FormProvider>
        </div>
    )
    
}

export default Form