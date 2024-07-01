import {ButtonHTMLAttributes, FC,ReactNode} from 'react';
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
children:ReactNode;
className?:string;
}
const Button:FC<Iprops> = ({children,className,...rest})=>{
return (
    <button className={`bg-black w-full rounded-md text-white px-2 py-4  ${className} `} {...rest}>{children}</button>
)
}
export default Button;