import type { PropsWithChildren } from "react"

const Paragraph: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return (
        <p className={`font-habibi ${className}`}>{children}</p>
    )
}

export default Paragraph