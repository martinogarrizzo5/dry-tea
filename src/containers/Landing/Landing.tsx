import { FC } from "react";
import { Link } from "react-router-dom";
import DrinkImg from "../../assets/drink-couple3-min.png";
import "./Landing.scss";

const Landing: FC = () => {
    return (
        <main className="landing app__page">
            <div className="landing__title-section">
                <h1 className="landing__title-section__title">
                    Taste Like A Champion!
                </h1>
                <p className="landing__title-section__sub-title">
                    Explore the thousands drinks that will change your entire
                    life
                </p>
                <Link to="/search" className="cta">
                    Discover Now
                </Link>
            </div>
            <div className="landing__img-section">
                <img
                    src={DrinkImg}
                    alt="drink"
                    className="landing__img-section__img"
                />
            </div>
        </main>
    );
};

export default Landing;
