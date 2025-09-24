import type { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren & {
    onClick?: () => void;
    className?: string;
    fontFamily?: string;
    fontSize?: number;
    px?: number;
    py?: number;
}> = ({ children, onClick, className, fontFamily}) => {
    return (
        <button
            className={className ? className : `bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white h-fit w-fit cursor-pointer transition-all ${fontFamily ?? "font-gupter"} text-[20px] lg:text-[27px] px-8 py-2 lg:px-[70px] lg:py-[30px]`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button
