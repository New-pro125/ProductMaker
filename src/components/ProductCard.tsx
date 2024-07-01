
import {FC} from 'react';
import Button from './UI/Button';
import Image from './UI/Image'
interface Iprops {
    imageURL:string;
    title:string;
    description:string;
    category:string;
    price:string
}
const ProductCard:FC<Iprops> = ({imageURL,title,description,category,price})=>{
return (
    
    <div className="max-w-sm md:max-w-lg mx-auto flex flex-col p-4 border justify-center border-gray-300 rounded-lg">
        <Image imageURL={imageURL} alt="Product Photo" className="w-full object-contain "/>
        <h3 className="font-medium text-xl my-2">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-start items-center space-x-2 my-4">
            <span className="block w-5 h-5 rounded-full bg-[#0f9] cursor-pointer"></span>
            <span className="block w-5 h-5 rounded-full bg-[#14f] cursor-pointer"></span>
            <span className="block w-5 h-5 rounded-full bg-[#02e] cursor-pointer"></span>
            <span className="block w-5 h-5 rounded-full bg-[#64c] cursor-pointer"></span>
            <span className="block w-5 h-5 rounded-full bg-[#6b9] cursor-pointer"></span>
        </div>
        <div className="flex justify-between items-center h-[40px]">
            <h4 className="text-lg">{`$${price}`}</h4>
            <div className="flex justify-center items-center space-x-2">
            <Image imageURL={imageURL} alt="Product Photo" className="w-10 h-10 rounded-full "/>
            <h4 className="text-lg">{category}</h4>
            </div>
        </div>
        <div className="flex flex-1 space-x-2 mt-5">
            <Button className="bg-blue-400 active:bg-blue-500 h-fit">Edit</Button>
            <Button className="bg-red-400 active:bg-red-500 h-fit">Delete</Button>
        </div>
    </div>
)
}
export default ProductCard;