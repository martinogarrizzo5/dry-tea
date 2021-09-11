import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomCocktails } from "../../store/actions/cocktails";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AppDispatch, RootState } from "../../store/store";
import "./Search.scss";

const Search: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const cocktails = useSelector(
        (state: RootState) => state.cocktails.cocktails
    );
    const randomCocktails = useSelector(
        (state: RootState) => state.cocktails.randomCocktails
    );

    useEffect(() => {
        if (cocktails && !Object.keys(cocktails).length) {
            dispatch(getRandomCocktails());
        }
    }, [cocktails, dispatch]);

    const componentToRender = () => {
        if (!cocktails) return;
        if (Object.keys(cocktails).length)
            return (
                <div className="search__cocktails">
                    {Object.keys(cocktails).map((key) => (
                        <CocktailCard
                            key={key}
                            id={cocktails[key].idDrink}
                            name={cocktails[key].strDrink}
                            img={cocktails[key].strDrinkThumb}
                        />
                    ))}
                </div>
            );
        if (randomCocktails)
            return (
                <div>
                    <h2 className="search__no-cocktail__title title2">
                        No Cocktail With That Name Was Found. <br /> Maybe you
                        were looking for...
                    </h2>
                    <div className="search__cocktails">
                        {Object.keys(randomCocktails).map((key) => (
                            <CocktailCard
                                key={randomCocktails[key].idDrink}
                                id={randomCocktails[key].idDrink}
                                name={randomCocktails[key].strDrink}
                                img={randomCocktails[key].strDrinkThumb}
                            />
                        ))}
                    </div>
                </div>
            );
    };

    return (
        <main className="search app__page">
            <SearchBar />
            {componentToRender()}
        </main>
    );
};

export default Search;
