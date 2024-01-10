import React, { FC } from 'react';
import LoginForm from '../../components/AuthForm/LoginForm';
import style from './login.module.css';

interface AuthProps {
    active:boolean;
    setActive:(active: boolean) => void;
}

const Page: FC<AuthProps> = ({active, setActive}) => {
    if(active){
        return(
            <div className={style.Auth}>
                <div className={style.modal}>
                    <button className={style.closeButton} onClick={() => setActive(false)}>
                        <span className={style.X}></span>
                        <span className={style.Y}></span>
                        <div className={style.close}>Close</div>
                    </button>
                    <LoginForm/>
                </div>
            </div>
        )
    }

};

export default Page;
