import { FC, ImgHTMLAttributes } from "react";
interface Iprops extends ImgHTMLAttributes<HTMLImageElement>{
	imageURL: string;
	alt: string;
    className?:string;
}
const Image: FC<Iprops> = ({ imageURL,className, alt ,...rest }) => {
	return <img src={imageURL} alt={alt} className={`${className}`} {...rest} />;
};
export default Image;
