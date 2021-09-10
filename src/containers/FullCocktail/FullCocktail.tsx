import { FC, useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import "./FullCocktail.scss";
import Image from "../../components/Image/Image";
import Spinner from "../../components/Spinner/Spinner";

const FullCocktail: FC = () => {
    const cocktails = useSelector(
        (state: RootState) => state.cocktails.cocktails
    );
    const { id } = useParams() as any;
    const [selectedCocktail, setSelectedCocktail] = useState<any>(null);

    useEffect(() => {
        (async () => {
            if (cocktails && cocktails.hasOwnProperty(id)) {
                setSelectedCocktail(cocktails[id]);
            } else {
                const response = await axios.get(`/lookup.php?i=${id}`);
                setSelectedCocktail(response.data.drinks[0]);
            }
        })();
    }, []);

    let tags: any[] = [];
    let ingredients: any[] = [];
    let cocktailGlass = {};
    if (selectedCocktail) {
        tags = selectedCocktail.strTags
            ? selectedCocktail.strTags.split(",")
            : [];
        for (let i = 1; i <= 15; i++) {
            if (!selectedCocktail[`strIngredient${i}`]) break;
            ingredients.push({
                baseName: selectedCocktail[`strIngredient${i}`],
                fullName:
                    (selectedCocktail[`strMeasure${i}`] || "") +
                    " " +
                    (selectedCocktail[`strIngredient${i}`] || ""),
                imageUrl: `https://www.thecocktaildb.com/images/ingredients/${
                    selectedCocktail[`strIngredient${i}`]
                }-Medium.png`,
            });
        }
        cocktailGlass = selectedCocktail.strGlass;
    }

    return (
        <main className="app__page full-cocktail">
            {selectedCocktail ? (
                <Fragment>
                    <h1 className="full-cocktail__title">
                        {selectedCocktail.strDrink}
                    </h1>
                    <div className="full-cocktail__container">
                        <div className="full-cocktail__left-side">
                            <Image
                                src={selectedCocktail.strDrinkThumb}
                                alt="cocktail"
                                className="full-cocktail__left-side__img"
                            />
                            <div className="full-cocktail__left-side__category">
                                <span className="full-cocktail__left-side__category__label">
                                    CATEGORY:
                                </span>
                                <span className="full-cocktail__left-side__category__text">
                                    {selectedCocktail.strCategory}
                                </span>
                            </div>
                            <div className="full-cocktail__left-side__tags">
                                {tags.map((tag: string) => (
                                    <span
                                        className="full-cocktail__left-side__tags__tag"
                                        key={tag}
                                    >
                                        # {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="full-cocktail__right-side">
                            <h2 className="full-cocktail__right-side__title">
                                INGREDIENTS:
                            </h2>
                            <div className="full-cocktail__right-side__ingredients">
                                {ingredients.map((ingredient) => (
                                    <div
                                        key={uuid()}
                                        className="full-cocktail__right-side__ingredients__ingredient"
                                    >
                                        <Image
                                            src={ingredient.imageUrl}
                                            alt={ingredient.baseName}
                                            className="full-cocktail__right-side__ingredients__ingredient__image"
                                        />
                                        <span className="full-cocktail__right-side__ingredients__ingredient__label">
                                            {ingredient.fullName}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="full-cocktail__right-side__glass">
                                <span className="full-cocktail__right-side__title">
                                    GLASS:
                                </span>
                                <span className="full-cocktail__right-side__glass__glass-name">
                                    {cocktailGlass}
                                </span>
                            </div>
                            <div className="full-cocktail__right-side__instructions">
                                <div className="full-cocktail__right-side__title">
                                    INSTRUCTIONS:
                                </div>
                                <p className="full-cocktail__right-side__instructions__text">
                                    {selectedCocktail.strInstructions}
                                </p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ) : (
                <Spinner />
            )}
        </main>
    );
};

export default FullCocktail;
