import { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Image from "../Image/Image";
import "./CocktailCard.scss";

interface CocktailCardProps extends RouteComponentProps {
  id: string;
  name: string;
  img: string;
}

const CocktailCard: FC<CocktailCardProps> = (props) => {
  const goToCocktailPage = () => {
    props.history.push(`/cocktails/${props.id}`);
  };

  return (
    <div className="cocktail-card" onClick={goToCocktailPage}>
      <Image src={props.img} alt="cocktail" className="cocktail-card__img" />
      <span className="cocktail-card__label">{props.name}</span>
    </div>
  );
};

export default withRouter(CocktailCard);
