import { FC, ReactNode } from "react";
import { X } from "lucide-react";
import Button from "../UI/Button";
interface Iprops {
	children?: ReactNode;
	description?: string;
	className?: string;
	title: string;
	setShowPopup: (arg: boolean) => void;
}
const Popup: FC<Iprops> = ({
	children,
	description,
	className,
	title,
	setShowPopup,
}) => {
	return (
		<div
			className={`bg-white p-4 w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-h-fit h-[80%] z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className} border-2 border-black overflow-y-auto `}>
			<header className={"flex justify-between mb-7  border-2 border-black"}>
				<h2 className="text-xl font-medium uppercase">{title}</h2>
				<X
					size={32}
					className={"cursor-pointer"}
					onClick={() => {
						setShowPopup(false);
					}}
				/>
			</header>
			<section className="my-5 h-fit  border-2 border-black grid it">
				{children ? children : <p>{description}</p>}
			</section>
			<div className="flex flex-1 space-x-2 mt-5 border-2 border-black">
				<Button
					className="bg-red-400 active:bg-red-500 h-fit"
					onClick={() => {
						setShowPopup(false);
					}}>
					Cancel
				</Button>
				<Button
					className="bg-green-400 active:bg-green-500 h-fit"
					onClick={() => {
						setShowPopup(false);
					}}>
					Submit
				</Button>
			</div>
		</div>
	);
};
export default Popup;
