"use client"
import React, { useState, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import GeminiApi from '../api/GeminiApi';
import styles from '../page.module.css';

export default function Main() {
    const [prompt, setPrompt] = useState('');
    const [inputValue, setInputValue] = useState('');

    const { data: generatedText, isLoading, isError } = useQuery([prompt], () => GeminiApi(prompt));

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setPrompt(inputValue);
    };

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <a>Chat</a>
                <div className={styles.close}>
                    <div className={styles.lineOne}></div>
                    <div className={styles.lineTwo}></div>
                </div>
            </div>
            <div className={styles.messagesArea}>
                <div className={styles.messageOne}>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error fetching data || Prompt cannot be empty</p>}
                    {generatedText && <pre className={styles.generatedText}>{generatedText}</pre>}
                </div>
            </div>
            <div className={styles.senderArea}>
                <div className={styles.inputPlace}>
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter your prompt" />
                    <button className={styles.send} onClick={handleClick}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
