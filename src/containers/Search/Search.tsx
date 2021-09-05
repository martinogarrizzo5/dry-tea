import { FC } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Search.scss";

const Search: FC = () => {
    return (
        <main className="search app__page">
            <SearchBar />
            <div className="cocktails">cocktails</div>
        </main>
    );
};

export default Search;
