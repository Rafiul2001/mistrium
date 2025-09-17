import type { PropsWithChildren } from "react"

const NavMenu: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return (
        <ul className={`${className ? className : "flex flex-row items-center gap-10 font-gupter"}`}>{children}</ul>
    )
}

export default NavMenu