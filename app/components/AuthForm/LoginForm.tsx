import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from '../components.module.css'

type FormValues = {
    email: string
    password:any
}

const  LoginForm = () => {
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="email" {...register("email")} />
        //     <input type={"password"} {...register("password")}/>
        //
        //     <button type="submit">
        //         Login
        //     </button>
        // </form>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.formTitle}>Sign in to your account</p>
            <div className={styles.inputContainer}>
                <input placeholder="Enter email" type={"email"} {...register("email")}/>
            </div>
            <div className={styles.inputContainer}>
                <input placeholder="Enter password" type={"password"} {...register("password")}/>
            </div>
            <button className={styles.submit} type="submit">
                Sign in
            </button>
            <p className={styles.signupLink}>
                No account?
                <button className={styles.signUpBtn}>Sign up</button>
            </p>
        </form>

    )
}

export default LoginForm;
