import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Flex from "../molecules/Flex";
import Container from "../molecules/Container";
import ImageContainer from "../molecules/ImageContainer";
import NavItem from "../molecules/NavItem";
import NavMenu from "./NavMenu";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Us",
    href: "#",
  },
  {
    id: 3,
    name: "Products",
    href: "#",
  },
  {
    id: 4,
    name: "FAQ'S",
    href: "#",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "#",
  },
];

const Header: React.FC = () => {
  return (
    <Container>
      <Flex className="items-center justify-between">
        <ImageContainer className="max-w-[228px]" src="Logo.png" alt="logo" />
        <NavMenu>
          {navItems.map((item) => (
            <NavItem
              className="relative block after:absolute after:content-[''] after:top-full after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-black after:transition-all"
              key={item.id}
              name={item.name}
              href={item.href}
            />
          ))}
        </NavMenu>
        <Flex className="gap-4">
          <CiSearch size={24} />
          <FaRegTrashAlt size={24} />
          <FiUser size={24} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
