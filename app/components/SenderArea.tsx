// SenderArea.tsx
import React, { ChangeEvent } from 'react';
import styles from '../page.module.css';
import { IoMdSend } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaTrash } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

type SenderAreaProps = {
    inputValue: string;
    isLoading: boolean;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
    handleClearChat: () => void;
};

const SenderArea: React.FC<SenderAreaProps> = ({ inputValue, isLoading, handleInputChange, handleClick, handleClearChat }) => (
    <div className={styles.senderArea}>
        <div className={styles.inputPlace}>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter your prompt" />

            <button className={styles.iconBtn} disabled={isLoading} title={"Send"}>
                <IoMdSend className={styles.sendIcon} onClick={handleClick}/>
            </button>
            <button className={styles.iconBtn} title={"Options"}>
                <SlOptionsVertical className={styles.optionsIcon}/>
            </button>
            {/* Uncomment the lines below if needed */}
            {/*<FaTrash className={styles.clearIcon} onClick={handleClearChat}/>*/}
            {/*<IoMdDownload className={styles.downloadIcon}/>*/}
        </div>
    </div>
);

export default SenderArea;
