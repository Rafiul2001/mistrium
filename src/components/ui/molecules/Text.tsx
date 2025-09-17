import React, { type PropsWithChildren } from 'react'

const Text: React.FC<PropsWithChildren & { size: number, className?: string }> = ({
    children, size, className
}) => {
    switch (size) {
        case 1:
            return (
                <h6 className={`font-gupter ${className}`}>{children}</h6>
            )
        case 2:
            return (
                <h5 className={`font-gupter ${className}`}>{children}</h5>
            )
        case 3:
            return (
                <h4 className={`font-gupter ${className}`}>{children}</h4>
            )
        case 4:
            return (
                <h3 className={`font-gupter ${className}`}>{children}</h3>
            )
        case 5:
            return (
                <h2 className={`font-gupter ${className}`}>{children}</h2>
            )
        default:
            return (
                <h1 className={`font-habibi ${className}`}>{children}</h1>
            )
    }

}

export default Text