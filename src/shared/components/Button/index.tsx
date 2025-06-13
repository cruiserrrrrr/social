import React, { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

export type ButtonVariant = "black" | "transparent";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
}

export const Button = (props: IButton) => {
    const {
        variant = "black",
        className = "",
        children,
        ...rest
    } = props;
    return (
        <button
            className={clsx(styles.button, styles[variant], className)}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;