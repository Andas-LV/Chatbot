import React, {useState} from 'react';
import styles from './pages.module.css';
import Header from '../components/Header';
import ChatPage from './Chatbot/page';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';

const Main: React.FC = () => {
    const [active, setActive] = useState(false)

    Cookies.set('cookieName', 'cookieValue');

    const cookieValue = Cookies.get('название_куки');

    return (

            <div className={styles.mainWrapper}>
                <Header/>

                <Link href={'/pages/Chatbot'}>
                    <div className={styles.chatIcon} onClick={() => setActive(true)}>
                        <Image
                            src="/chatIcon.png"
                            width={80}
                            height={80}
                            quality={100}
                            style={{borderRadius: "80px"}}
                            alt="chatIcon"
                        />
                    </div>
                </Link>

                <ChatPage active={active} setActive={setActive}/>
            </div>
    );
};

export default Main;
