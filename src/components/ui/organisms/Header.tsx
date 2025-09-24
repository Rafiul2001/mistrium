import { CiSearch } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Flex from "../molecules/Flex";
import Container from "../molecules/Container";
import ImageContainer from "../molecules/ImageContainer";
import NavItem from "../molecules/NavItem";
import NavMenu from "./NavMenu";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

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
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);

  return (
    <Container>
      <Flex className="items-center justify-between relatives">
        <ImageContainer className="max-w-[228px]" src="Logo.png" alt="logo" />
        <NavMenu>
          {navItems.map((item) => (
            <NavItem
              className="relative block after:absolute after:content-[''] after:top-full after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-black after:transition-all text-[17px] font-gupter tracking-[2%]"
              key={item.id}
              name={item.name}
              href={item.href}
            />
          ))}
        </NavMenu>
        <Flex className="gap-4 max-w-fit">
          <CiSearch size={24} />
          <FaRegTrashAlt size={24} />
          <FiUser size={24} />
          <IoMenu
            onClick={() => setIsOpenSideBar(!isOpenSideBar)}
            className="block lg:hidden"
            size={24}
          />
        </Flex>
      </Flex>
      {/* Overlay */}
      {isOpenSideBar && (
        <div
          onClick={() => setIsOpenSideBar(false)}
          className="fixed lg:hidden top-0 bottom-0 left-0 right-0 bg-white/30 z-40 pointer-events-auto"
        ></div>
      )}
      <Flex
        className={`flex lg:hidden flex-col fixed top-0 bottom-0 ${
          isOpenSideBar ? "left-0" : "-left-[200px]"
        } w-[200px] z-50 bg-white shadow-2xl px-6 py-8 transition-all duration-300`}
      >
        <IoMdCloseCircle
          onClick={() => setIsOpenSideBar(false)}
          size={24}
          className="self-end"
        />
        <NavMenu className="flex-col">
          {navItems.map((item) => (
            <NavItem
              className="relative block after:absolute after:content-[''] after:top-full after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-black after:transition-all text-[17px] font-gupter tracking-[2%]"
              key={item.id}
              name={item.name}
              href={item.href}
            />
          ))}
        </NavMenu>
      </Flex>
    </Container>
  );
};

export default Header;
