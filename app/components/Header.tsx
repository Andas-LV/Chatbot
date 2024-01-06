import styles from './components.module.css';
import Auth from '@/app/pages/Login/page';
import {useState} from "react";

const Header = () => {
    const [active, setActive] = useState(false)

    return(
        <div className={styles.headerWrapper}>
            <button onClick={() =>setActive(true)} className={styles.loginBtn}>Login</button>
            <Auth active={active} setActive={setActive}/>
        </div>
    )
}

export default Header;