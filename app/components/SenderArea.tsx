import React, {ChangeEvent, useState} from 'react';
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
    handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleClearChat: () => void;
};

const SenderArea: React.FC<SenderAreaProps> = ({ inputValue, isLoading, handleInputChange, handleClick, handleClearChat, handleEnter }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (isOpen: boolean) => {
        setIsDropdownOpen(isOpen);
    };

    const handleInputFocus = () => {
        toggleDropdown(false);
    };

    const renderDropdown = () => {
        if (isDropdownOpen) {
            return (
                <div className={styles.dropdown}>
                    <FaTrash className={styles.clearIcon} onClick={handleClearChat} title={"Clear Chat"}/>
                    <IoMdDownload className={styles.downloadIcon} title={"Download Chat"}/>
                </div>
            );
        }
        return null;
    };

    return (
        <div className={styles.senderArea}>
            <div className={styles.inputPlace}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onKeyDown={handleEnter}
                    placeholder="Enter your prompt"
                />

                <button
                    className={styles.iconBtn}
                    disabled={isLoading}
                    title={"Send"}
                >
                    <IoMdSend className={styles.sendIcon} onClick={handleClick}/>
                </button>
                <button
                    className={styles.iconBtn}
                    title={"Options"}
                    onClick={() => toggleDropdown(!isDropdownOpen)}
                >
                    <SlOptionsVertical className={styles.optionsIcon}/>
                </button>
                {renderDropdown()}
            </div>
        </div>
    );
}

export default SenderArea;
