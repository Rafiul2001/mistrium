import { BsArrowRight } from "react-icons/bs";
import Container from "../molecules/Container";
import Flex from "../molecules/Flex";
import Text from "../molecules/Text";
import ImageContainer from "../molecules/ImageContainer";

const Contact: React.FC = () => {
  return (
    <Container className="pl-[108px] pr-[48px]">
      <Flex className="items-end justify-between">
        <Flex className="flex-col">
          <a
            href="#"
            className="block max-w-fit py-4 px-9 rounded-[30px] font-gupter font-bold tracking-[2%] border-[2px] text-primary border-primary"
          >
            See Your Interior Design
          </a>
          <Text
            size={3}
            className="max-w-[349px] text-[30px] font-gupter font-bold leading-[39px] tracking-[2%] mt-6"
          >
            Sign up fo the notification for add a new product’s
          </Text>
          <Flex className="items-center mt-[16px] bg-[#D9D9D9]/50 w-fit pr-2 rounded-[13px]">
            <Text className="ml-[26px] mr-[48px] my-[32px]">
              Your Busness Email
            </Text>
            <Flex className="items-center">
              <Text className="font-gupter h-auto font-bold text-[20px] tracking-[2%] text-white bg-[#C4A586] px-[42px] py-[23px] rounded-l-[13px]">
                Get Started
              </Text>
              <div className="px-[27px] py-[22px] bg-[#C4A586]/44 rounded-r-[13px]">
                <BsArrowRight size={32} />
              </div>
            </Flex>
          </Flex>
        </Flex>

        <Flex className="gap-[9px] items-center max-w-fit">
          <ImageContainer src="contact.png" alt="contact" />
          <Text className="font-gupter font-medium text-[19px] tracking-[2%]">
            WAtch Video’s
          </Text>
          <div>
            <BsArrowRight size={32} />
          </div>
        </Flex>
        <ImageContainer src="sign-up-sofa-image.png" alt="sign-up-sofa-image" />
      </Flex>
    </Container>
  );
};

export default Contact;
