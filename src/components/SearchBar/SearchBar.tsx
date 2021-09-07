import { FC, useState, ChangeEventHandler, Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { searchCocktail } from "../../store/actions/cocktails";
import { RouteComponentProps, withRouter } from "react-router";
import { MdSearch } from "react-icons/md";
import "./SearchBar.scss";
import Spinner from "../Spinner/Spinner";

interface SearchBarProps extends RouteComponentProps {}

const SearchBar: FC<SearchBarProps> = (props) => {
    const dispatch: AppDispatch = useDispatch();
    const lastSearchedCocktail = useSelector(
        (state: RootState) => state.cocktails.searchedCocktail
    );
    const [isLoading, setAsLoading] = useState(false);

    const [searchedCocktail, setSearchedCocktail] = useState(
        lastSearchedCocktail || ""
    );

    useEffect(() => {
        (async () => {
            const params = new URLSearchParams(props.location.search);
            const cocktailParam = params.get("cocktail");
            if (cocktailParam && lastSearchedCocktail !== cocktailParam) {
                await dispatch(searchCocktail(cocktailParam));
                setSearchedCocktail(cocktailParam);
            }
        })();
    }, []);

    const handleSearchedCocktailChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setSearchedCocktail(event.target.value);
    };

    const submitSearch: ChangeEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (!searchedCocktail) return;

        setAsLoading(true);
        await dispatch(searchCocktail(searchedCocktail));
        setAsLoading(false);

        props.history.push(`/search?cocktail=${searchedCocktail}`);
    };

    return (
        <Fragment>
            <form className="search-bar" onSubmit={submitSearch}>
                <input
                    type="text"
                    value={searchedCocktail}
                    onChange={handleSearchedCocktailChange}
                    className="search-bar__input"
                    autoCorrect="off"
                    placeholder="Search Cocktails"
                />
                <button type="submit" className="search-bar__submit">
                    <MdSearch className="search-bar__submit__icon" />
                </button>
            </form>
            {isLoading && <Spinner className="search-bar__spinner" />}
        </Fragment>
    );
};

export default withRouter(SearchBar);
