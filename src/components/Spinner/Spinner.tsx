import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import "./Spinner.scss";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}

const Spinner: FC<SpinnerProps> = ({ className, ...rest }) => {
    const spinnerClassName = classNames("loader", className);

    return <div className={spinnerClassName} {...rest}></div>;
};

export default Spinner;
