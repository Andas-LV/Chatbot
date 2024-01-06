import styles from './components.module.css';
import dynamic from "next/dynamic";
import React from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });

interface SearchOption {
    value: string;
    label: string;
}

interface InputSelect {
    value: any;
    onChange: any;
}

const InputSelect: React.FC<InputSelect> = ({value, onChange}) => {
    const searches : SearchOption[] = [
        {value: 'jack', label: 'Jack'},
        {value: 'mike', label: 'Mike'},
        {value: 'go', label: 'Go'},
    ]

    return(
        <div className={styles.wrapper}>
            <Select  placeholder={'Enter your prompt'} value={value} onChange={onChange}/>
        </div>
    )
}

export default InputSelect;
