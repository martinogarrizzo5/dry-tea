import { FC, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./CocktailCard.scss";

interface CocktailCardProps extends RouteComponentProps {
    id: string;
    name: string;
    img: string;
}

const CocktailCard: FC<CocktailCardProps> = (props) => {
    const [isLoading, setAsLoading] = useState(true);
    const goToCocktailPage = () => {
        props.history.push(`/cocktails/${props.id}`);
    };

    const handleImageLoading = () => {
        setAsLoading(false);
    };

    return (
        <div className="cocktail-card" onClick={goToCocktailPage}>
            <img
                src={props.img + "/preview"}
                alt="cocktail"
                className="cocktail-card__img"
                onLoad={handleImageLoading}
                style={{ height: isLoading ? "0" : "100%" }}
                loading="lazy"
            />
            <Spinner
                className="cocktail-card__spinner"
                style={{ display: isLoading ? "block" : "none" }}
            />
            <span className="cocktail-card__label">{props.name}</span>
        </div>
    );
};

export default withRouter(CocktailCard);
