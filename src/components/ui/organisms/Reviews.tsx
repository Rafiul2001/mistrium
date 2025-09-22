import Container from "../molecules/Container"
import Flex from "../molecules/Flex"
import ImageContainer from "../molecules/ImageContainer"
import { SliderComponent } from "../molecules/SliderComponent"


const Reviews: React.FC = () => {
    return (
        <Container>
            <SliderComponent />
            <Flex className="gap-9 ml-[289px] mt-[54px]">
                <ImageContainer src="customer-say-2.png" alt="customer-say-2"/>
                <ImageContainer src="customer-say-3.png" alt="customer-say-3"/>
                <ImageContainer src="customer-say-4.png" alt="customer-say-4"/>
            </Flex>
        </Container>
    )
}

export default Reviews