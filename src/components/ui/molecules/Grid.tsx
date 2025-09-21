import type { PropsWithChildren } from "react"

const Grid: React.FC<PropsWithChildren & {
    className?: string
}> = ({ children, className }) => {
    return (
        <div className={`grid ${className}`}>{children}</div>
    )
}

export default Grid