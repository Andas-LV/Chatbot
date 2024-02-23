import React, { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import styles from '../page.module.css';
import ChatMessages from '../components/ChatMessages';
import SenderArea from '../components/SenderArea';
import GeminiApi from "@/app/api/GeminiApi";

type Message = string;

export default function Main() {
    const [prompt, setPrompt] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [chat, setChat] = useState<Message[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleClick = useCallback(() => {
        if (inputValue === '') {
            setIsEmpty(true);
        }
        setPrompt(inputValue);
        setInputValue('');
    }, [inputValue]);

    const handleEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }, [handleClick]);

    const handleDownload = useCallback(() => {
        const pdf = new jsPDF();

        const dataString = chat.join('\n');

        pdf.text(dataString, 10, 10);

        pdf.save('chat.pdf');
    }, [chat])

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response: Message = await GeminiApi(prompt);
            setChat(prevChat => [...prevChat, response]);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

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
    }, [fetchData, prompt]);

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <a>Chat</a>
            </div>

            <ChatMessages
                chat={chat}
                isLoading={isLoading}
                isError={isError}
                isEmpty={isEmpty}
                inputValue={inputValue}
            />

            <SenderArea
                inputValue={inputValue}
                isLoading={isLoading}
                handleInputChange={handleInputChange}
                handleClick={handleClick}
                handleEnter={handleEnter}
                handleClearChat={handleClearChat}
                handleDownload={handleDownload}
            />
        </div>
    );
}
