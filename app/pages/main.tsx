import React from 'react';
import styles from './pages.module.css';
import ChatPage from './Chatbot/page';

const Main: React.FC = () => {
    return (
        <div className={styles.mainWrapper}>
            <ChatPage/>
        </div>
    );
};

export default Main;
