import { FC, useState, ChangeEventHandler } from "react";
import { MdSearch } from "react-icons/md";
import "./SearchBar.scss";

const SearchBar: FC = () => {
    const [searchedCocktail, setSearchedCocktail] = useState("");

    const handleSearchedCocktailChange: ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setSearchedCocktail(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchedCocktail}
                onChange={handleSearchedCocktailChange}
                className="search-bar__input"
                autoCorrect="off"
            />
            <MdSearch className="search-bar__submit" />
        </div>
    );
};

export default SearchBar;
