import { BsArrowRight } from "react-icons/bs";
import Container from "../molecules/Container";
import Flex from "../molecules/Flex";
import Text from "../molecules/Text";
import ImageContainer from "../molecules/ImageContainer";

const Contact: React.FC = () => {
  return (
    <Container className="lg:pl-[108px] lg:pr-[48px]">
      <Flex className="flex-col lg:flex-row lg:items-end lg:justify-between">
        <Flex className="flex-col items-center lg:items-start">
          <a
            href="#"
            className="block max-w-fit py-4 px-9 rounded-[30px] font-gupter font-bold tracking-[2%] border-[2px] text-primary border-primary"
          >
            See Your Interior Design
          </a>
          <Text
            size={3}
            className="lg:max-w-[349px] text-[30px] font-gupter font-bold leading-[39px] tracking-[2%] mt-6 text-center lg:text-left"
          >
            Sign up fo the notification for add a new product’s
          </Text>
          <Flex className="items-center mt-[16px] bg-[#D9D9D9]/50 w-fit pr-2 rounded-[13px]">
            <Text className="lg:ml-[26px] text-[14px] lg:text-[16px] lg:mr-[48px] lg:my-[32px] px-2">
              Your Busness Email
            </Text>
            <Flex className="items-center">
              <Text className="font-gupter h-auto font-bold text-[14px] lg:text-[20px] tracking-[2%] text-white bg-[#C4A586] px-4 lg:px-[42px] py-[23px] rounded-l-[13px] text-nowrap">
                Get Started
              </Text>
              <div className="px-6 lg:px-[27px] py-[18px] lg:py-[22px] bg-[#C4A586]/44 rounded-r-[13px]">
                <BsArrowRight size={32} />
              </div>
            </Flex>
          </Flex>
        </Flex>

        <Flex className="gap-[9px] mt-4 lg:mt-0 items-center justify-center lg:justify-start lg:max-w-fit">
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
