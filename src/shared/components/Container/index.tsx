import React, { HTMLAttributes } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Container = (props: IContainer) => {
    const {
        className = "",
        children,
        ...rest
    } = props;
    return (
        <div
            className={clsx(styles.container, className)}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Container;