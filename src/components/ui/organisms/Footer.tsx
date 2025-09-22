import Container from "../molecules/Container";
import Flex from "../molecules/Flex";
import ImageContainer from "../molecules/ImageContainer";
import NavItem from "../molecules/NavItem";
import Text from "../molecules/Text";
import NavMenu from "./NavMenu";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

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

const Footer: React.FC = () => {
  return (
    <div>
      <Container className="pl-[108px] pr-[72px] mt-[114px]">
        <Flex className="items-center justify-between">
          <ImageContainer
            className="max-w-[228px]"
            src="Logo T.png"
            alt="Logo T"
          />
          <NavMenu className="">
            {navItems.map((item) => (
              <NavItem
                className="relative block after:absolute after:content-[''] after:top-full after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-black after:transition-all text-[17px] font-gupter tracking-[2%]"
                key={item.id}
                name={item.name}
                href={item.href}
              />
            ))}
          </NavMenu>
          <Flex className="gap-4 items-center justify-end">
            <FaYoutube size={24} fill="#B99272" />
            <FaFacebookF size={24} fill="#B99272" />
            <FaYoutube size={24} fill="#B99272" />
            <FaFacebookF size={24} fill="#B99272" />
          </Flex>
        </Flex>
      </Container>

      <Text className="mt-[22px] pt-[47px] pb-[38px] text-center border-[2px] border-[#72696A]/39 font-gupter font-medium tracking-[2%]">All Copyright Reasurved By || <span className="text-[#C4A586]">ISTIAK</span></Text>
    </div>
  );
};

export default Footer;
