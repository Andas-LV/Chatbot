// Main.tsx
import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import GeminiApi from '../api/GeminiApi';
import styles from '../page.module.css';
import ChatMessages from '../components/ChatMessages';
import SenderArea from '../components/SenderArea';

type Message = string;

export default function Main() {
    const [prompt, setPrompt] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [chat, setChat] = useState<Message[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleClick = useCallback(() => {
        if (prompt == '') {
            setIsEmpty(true);
        }
        setPrompt(inputValue);
        setInputValue('');
    }, [inputValue, prompt]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response: Message = await GeminiApi(prompt);
            setChat((prevChat: Message[]) => [...prevChat, response]);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const handleClearChat = useCallback(() => {
        setChat([]);
    }, []);

    useEffect(() => {
        if (prompt !== '') {
            fetchData();
            setIsEmpty(false);
        }
    }, [prompt]);

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <a>Chat</a>
            </div>
            <ChatMessages chat={chat} isLoading={isLoading} isError={isError} isEmpty={isEmpty} />
            <SenderArea
                inputValue={inputValue}
                isLoading={isLoading}
                handleInputChange={handleInputChange}
                handleClick={handleClick}
                handleClearChat={handleClearChat}
            />
        </div>
    );
}
