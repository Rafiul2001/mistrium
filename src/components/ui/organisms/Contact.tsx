import { BsArrowRight } from "react-icons/bs"
import Container from "../molecules/Container"
import Flex from "../molecules/Flex"
import Text from "../molecules/Text"

const Contact: React.FC = () => {
    return (
        <Container className="pl-[108px] pr-[48px]">
            <Flex className="flex-col">
                <a href="#" className="block max-w-fit py-4 px-9 rounded-[30px] font-gupter font-bold tracking-[2%] border-[2px] text-primary border-primary">
                    See Your Interior Design
                </a>
                <Text size={3} className="max-w-[349px] text-[30px] font-gupter font-bold leading-[39px] tracking-[2%] mt-6">Sign up fo the notification for add a new product’s</Text>
                <Flex className="items-center">
                    <Text className="ml-[26px] mr-[48px] my-[28px]">Your Busness Email</Text>
                    <Flex>
                        <Text>Get Started</Text>
                        <BsArrowRight size={32} />
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Contact