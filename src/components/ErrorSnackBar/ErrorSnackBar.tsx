import { FC, useEffect } from "react";
import { uiActions } from "../../store/ui";
import { MdErrorOutline } from "react-icons/md";
import "./ErrorSnackBar.scss";
import { useAppDispatch } from "../../store/store";

interface ErrorSnackBarProps {
    message: string;
}

const ErrorSnackBar: FC<ErrorSnackBarProps> = (props) => {
    const dispatch = useAppDispatch();

    // remove error snackbar after certain amount time
    useEffect(() => {
        setTimeout(() => {
            dispatch(uiActions.setActionRejected(false));
        }, 3000);
    });

    return (
        <div className="error-message">
            <MdErrorOutline className="error-message__icon" />
            <span className="error-message__text">{props.message}</span>
        </div>
    );
};

export default ErrorSnackBar;
