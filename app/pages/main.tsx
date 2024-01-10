import React, {useState} from 'react';
import styles from './pages.module.css';
import ChatPage from './Chatbot/page';

const Main: React.FC = () => {
    const [active, setActive] = useState(true);

    return (
        <div className={styles.mainWrapper}>
            <ChatPage active={active} setActive={setActive}/>
        </div>
    );
};

export default Main;
