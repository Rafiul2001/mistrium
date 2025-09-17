import Button from "../molecules/Button"
import Container from "../molecules/Container"
import Flex from "../molecules/Flex"
import Paragraph from "../molecules/Paragraph"
import Text from "../molecules/Text"

const Banner: React.FC = () => {
    return (
        <Container>
            <Text size={6}>Modern Furniture For Modern Living Style</Text>
            <Paragraph>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstr ate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Paragraph>
            <br /><br /><br /><br />
            <Paragraph>graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</Paragraph>
            <Flex className="gap-[33px]">
                <Button>Register</Button>
                <Button>Watch Video’s</Button>
            </Flex>
        </Container>
    )
}

export default Banner