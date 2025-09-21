import type { PropsWithChildren } from "react"

const Paragraph: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return (
        <p className={className}>{children}</p>
    )
}

export default Paragraph