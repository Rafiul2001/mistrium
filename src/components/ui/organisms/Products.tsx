import { MdArrowRightAlt } from "react-icons/md"
import Container from "../molecules/Container"
import Text from "../molecules/Text"
import Flex from "../molecules/Flex"
import Grid from "../molecules/Grid"
import { BsCart2 } from "react-icons/bs"
import ImageContainer from "../molecules/ImageContainer"

type TProduct = {
    id: string;
    name: string;
    price: number;
    discountedPrice: number;
    image: string;
    alt: string;
}

const products: TProduct[] = [
    {
        id: "1",
        name: "Sofa",
        price: 800,
        discountedPrice: 500,
        image: "product-chair.png",
        alt: "product-chair"
    },
    {
        id: "2",
        name: "Sofa",
        price: 800,
        discountedPrice: 500,
        image: "product-chair-1.png",
        alt: "product-chair"
    },
    {
        id: "3",
        name: "Sofa",
        price: 800,
        discountedPrice: 500,
        image: "product-chair-2.png",
        alt: "product-chair"
    },
    {
        id: "4",
        name: "Sofa",
        price: 800,
        discountedPrice: 500,
        image: "product-chair.png",
        alt: "product-chair"
    },
    {
        id: "5",
        name: "Sofa",
        price: 800,
        discountedPrice: 500,
        image: "product-chair-2.png",
        alt: "product-chair"
    },
    {
        id: "6",
        name: "Sofa",
        price: 800,
        discountedPrice: 500,
        image: "product-chair-1.png",
        alt: "product-chair"
    }
]

const Products: React.FC = () => {
    return (
        <Container className="mt-8 lg:mt-[154px]">
            <Flex className="w-full flex-col lg:flex-row">
                <Text className="flex-1 font-gupter font-bold text-[40px] tracking-[2%] text-center lg:text-left">Products</Text>
                <ul className="mt-9 lg:mt-[42px] flex flex-col lg:flex-row gap-2 lg:gap-[109px] items-center">
                    <li><Text className="font-medium font-gupter text-[25px] tracking-[2%]">Best Selling</Text></li>
                    <li><Text className="font-medium font-gupter text-[25px] tracking-[2%]">Most Popular</Text></li>
                    <li>
                        <a href="#" className="flex gap-[25px] items-center w-fit text-primary font-gupter text-[16px] tracking-[2%]">
                            <Text className="font-gupter font-medium tracking-[2%]">See All</Text>
                            <MdArrowRightAlt size={40} />
                        </a>
                    </li>
                </ul>
            </Flex>

            <Grid className="grid-cols-1 lg:grid-cols-3 gap-x-[46px] gap-y-20 lg:gap-y-[18px] mt-9 lg:mt-[77px]">
                {/* Product Card */}
                {
                    products.map((pd) => (
                        <div key={pd.id} className="relative grid-item lg:hover:scale-110">
                            <Flex className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[25px] w-fit items-center gap-[25px] px-[37px] py-[22px] bg-[#D1A070]">
                                <Text className="font-gupter font-medium tracking-[2%] text-nowrap">Add to cart</Text>
                                <BsCart2 size={32} />
                            </Flex>
                            <div className="bg-primary/63 pt-[36px] pl-[84px] pb-[164px] mt-[36px] mb-[160px]">
                                <Text size={4} className="font-habibi font-normal text-[22px] leading-[76px]">{pd.name}</Text>
                                <Flex className="pl-[58px] items-center gap-[54px] font-gupter tracking-[2%] font-bold">
                                    <Text size={5} className="text-[17px] ">${pd.discountedPrice}</Text>
                                    <del><Text className="text-[15px] text-[#72696A]" size={5}>${pd.price}</Text></del>
                                </Flex>
                            </div>
                            <ImageContainer src={pd.image} alt="product-chair" className="absolute left-1/2 -translate-x-1/2 top-[194px]" />
                        </div>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Products