import { FC } from "react";
import { useSelector } from "react-redux";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { RootState } from "../../store/store";
import "./Search.scss";

const Search: FC = () => {
    const cocktails = useSelector(
        (state: RootState) => state.cocktails.cocktails
    );

    return (
        <main className="search app__page">
            <SearchBar />
            <div className="search__cocktails">
                {cocktails &&
                    Object.keys(cocktails).map((key) => (
                        <CocktailCard
                            key={key}
                            id={cocktails[key].idDrink}
                            name={cocktails[key].strDrink}
                            img={cocktails[key].strDrinkThumb}
                        />
                    ))}
            </div>
        </main>
    );
};

export default Search;
