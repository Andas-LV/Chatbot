import React, {useState} from 'react';
import styles from './pages.module.css';
import Header from '../components/Header/Header';
import ChatPage from './Chatbot/page';

const Main: React.FC = () => {
    const [active, setActive] = useState(true);

    return (

            <div className={styles.mainWrapper}>
                <Header/>

                <ChatPage active={active} setActive={setActive}/>
            </div>
    );
};

export default Main;
