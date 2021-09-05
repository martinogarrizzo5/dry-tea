import { FC } from "react";
import { RouteComponentProps, withRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import classNames from "classnames";
import { uiActions } from "../../store/ui";
import LogoImg from "../../assets/logo-white-mini.png";
import "./Header.scss";

interface HeaderProps extends RouteComponentProps {}

const Header: FC<HeaderProps> = (props) => {
    const isNavShown = useSelector((state: RootState) => state.ui.isNavShown);
    const dispatch: AppDispatch = useDispatch();

    const goToHome = () => {
        if (props.location.pathname !== "/") props.history.push("/");
    };

    const toggleNav = () => {
        dispatch(uiActions.toggleNav());
    };

    const hamburgerClassnames = classNames("header__hamburger", {
        "header__hamburger--active": isNavShown,
    });

    return (
        <header className="app__header header">
            <img
                src={LogoImg}
                alt="logo"
                className="header__logo"
                onClick={goToHome}
            />
            <div className="header__links">
                <NavLink
                    to="/"
                    exact
                    className="header__links__link"
                    activeClassName="header__links__link--active"
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/search"
                    className="header__links__link"
                    activeClassName="header__links__link--active"
                >
                    SEARCH
                </NavLink>
            </div>
            <div className={hamburgerClassnames} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default withRouter(Header);
