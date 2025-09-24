import Container from "../molecules/Container"
import Flex from "../molecules/Flex"
import ImageContainer from "../molecules/ImageContainer"
import Paragraph from "../molecules/Paragraph"
import Text from "../molecules/Text"

const Clients: React.FC = () => {
    return (
        <>
            <Container>
                <Text className="font-gupter text-[23px] font-bold tracking-[2%] text-center">SUM OF OUR TRUSTED CLIENTS</Text>
                <Flex className="flex-col gap-8 lg:flex-row mt-[40px] lg:mt-[91px] items-center justify-between">
                    <ImageContainer className="w-auto h-fit" src="Samsung.png" alt="Samsung" />
                    <ImageContainer className="w-auto h-fit" src="Google.png" alt="Google" />
                    <ImageContainer className="w-auto h-fit" src="IBM.png" alt="IBM" />
                    <ImageContainer className="w-auto h-fit" src="DaraZ.png" alt="DaraZ" />
                    <ImageContainer className="w-auto h-fit" src="emazon.png" alt="emazon" />
                </Flex>
            </Container>

            <Flex className="w-full mt-[66px] flex-col gap-4 lg:gap-0 lg:flex-row">
                <Flex className="flex-1 px-2 lg:pr-[38px] lg:pl-[51px] items-center justify-between h-fit">
                    <div>
                        <Text className="font-gupter font-bold text-[30px] tracking-[2%]">House Product</Text>
                        <Paragraph className="mt-[41px] font-gupter font-medium text-[25px] tracking-[2%] text-primary">Browse More Collection</Paragraph>
                    </div>
                    <ImageContainer src="house-product.png" alt="house-product" />
                </Flex>

                <Flex className="flex-1 p-2 lg:pr-[48px] lg:pl-[96px] lg:pt-[43px] lg:pb-[80px] items-center justify-between bg-primary">
                    <div>
                        <Text className="font-gupter font-bold text-[30px] tracking-[2%]">Office Furnicer</Text>
                        <Paragraph className="mt-[41px] font-gupter font-medium text-[25px] tracking-[2%] text-[#72696A]">Browse More Collection</Paragraph>
                    </div>
                    <ImageContainer src="office-furniture.png" alt="office-furniture" />
                </Flex>
            </Flex>
        </>
    )
}

export default Clients