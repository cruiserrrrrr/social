import React, { TextareaHTMLAttributes } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export const TextArea = (props: ITextArea) => {
    const {
        className = "",
        ...rest
    } = props;
    return (
        <textarea
            className={clsx(styles.textarea, className)}
            {...rest}
        />
    );
};

export default TextArea;