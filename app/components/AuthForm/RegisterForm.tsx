import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import style from '../components.module.css'

type FormValues = {
    firstName: string
    lastName: string
    email: string
    password:any
}

const  RegisterForm = () => {
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
            <input type="email" {...register("email")} />
            <input type={"password"} {...register("password")}/>

            <button type="submit">
                Register
            </button>
        </form>
    )
}

export default RegisterForm;
