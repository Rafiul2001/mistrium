import type { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren & {
    onClick?: () => void;
    className?: string;
    fontFamily?: string;
    fontSize?: number;
    px?: number;
    py?: number;
}> = ({ children, onClick, className, fontFamily, fontSize, px, py }) => {
    return (
        <button
            className={className ? className : `bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white h-fit w-fit cursor-pointer transition-all ${fontFamily ?? "font-gupter"}`}
            style={{
                fontSize: fontSize ? `${fontSize}px` : "27px",
                paddingLeft: px ? `${px}px` : "70px",
                paddingRight: px ? `${px}px` : "70px",
                paddingTop: py ? `${py}px` : "30px",
                paddingBottom: py ? `${py}px` : "30px",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button
