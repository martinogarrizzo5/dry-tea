import { FC, ImgHTMLAttributes, useState } from "react";
import Spinner from "../Spinner/Spinner";
import classNames from "classnames";
import "./Image.scss";

interface ImageProps extends ImgHTMLAttributes<any> {}

const Image: FC<ImageProps> = ({ alt, src, className }, ...rest) => {
  const imageClassName = classNames("image", className);

  const [isLoading, setAsLoading] = useState(true);
  const handleImageLoading = () => {
    setAsLoading(false);
  };

  return (
    <div className={imageClassName}>
      <img
        alt={alt}
        src={src}
        onLoad={handleImageLoading}
        style={{ height: isLoading ? "0" : "100%" }}
        className="image__img"
      />
      <Spinner
        className="image__spinner"
        style={{ display: isLoading ? "block" : "none" }}
      />
    </div>
  );
};

export default Image;
