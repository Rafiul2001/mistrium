const NavItem: React.FC<{ className?: string; name: string; href: string }> = ({
  className,
  name,
  href,
}) => {
  return (
    <li className={`${className}`}>
      <a className="block" href={href}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
