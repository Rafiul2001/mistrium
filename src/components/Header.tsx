import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Flex from "./ui/Flex";
import Container from "./ui/Container";
import ImageContainer from "./ui/ImageContainer";
import NavItem from "./ui/NavItem";

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
        <ul className="flex flex-row items-center gap-10 font-gupter">
          {navItems.map((item) => (
            <NavItem
              className="relative block after:absolute after:content-[''] after:top-full after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-black after:transition-all"
              key={item.id}
              name={item.name}
              href={item.href}
            />
          ))}
        </ul>
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
