import { FC } from "react";
import { useDispatch } from "react-redux";
import { Language, uiActions } from "../../store/ui";
import usaImage from "../../assets/usa.png";
import italyImage from "../../assets/italy.png";
import spainImage from "../../assets/spain.png";
import frenchImage from "../../assets/french.png";
import germanyImage from "../../assets/germany.png";
import "./LanguageSelector.scss";

const LanguageDropdown: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="language">
      <img
        src={usaImage}
        alt="usa-image"
        onClick={() => dispatch(uiActions.changeLanguage(Language.English))}
      />
      <img
        src={italyImage}
        alt="italy-image"
        onClick={() => dispatch(uiActions.changeLanguage(Language.Italian))}
      />
      <img
        src={spainImage}
        alt="spanish-image"
        onClick={() => dispatch(uiActions.changeLanguage(Language.Spanish))}
      />
      <img
        src={frenchImage}
        alt="french-image"
        onClick={() => dispatch(uiActions.changeLanguage(Language.French))}
      />
      <img
        src={germanyImage}
        alt="germany-image"
        onClick={() => dispatch(uiActions.changeLanguage(Language.Germany))}
      />
    </div>
  );
};

export default LanguageDropdown;
