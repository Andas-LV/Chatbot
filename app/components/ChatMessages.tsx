// ChatMessages.tsx
import React from 'react';
import styles from '../page.module.css';

type ChatMessagesProps = {
    chat: string[];
    isLoading: boolean;
    isError: boolean;
    isEmpty: boolean;
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ chat, isLoading, isError, isEmpty }) => (
    <div className={styles.messagesArea}>
        {chat.map((message, index) => (
            <div key={index} className={styles.messageOne}>
                <pre className={styles.generatedText}>{message}</pre>
            </div>
        ))}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {isEmpty && <p>Prompt cannot be empty</p>}
    </div>
);

export default ChatMessages;
