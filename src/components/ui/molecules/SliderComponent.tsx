import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Flex from "./Flex";
import ImageContainer from "./ImageContainer";
import Text from "./Text";
import Paragraph from "./Paragraph";
import { Rating } from "./Rating";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export const SliderComponent: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                <Flex className="items-center gap-[105px] px-[80px]">
                    <ImageContainer
                        src="customer-say-1.png"
                        alt="customer-say-1"
                        className="flex-1 max-w-[477px]"
                    />
                    <Flex className="flex-1 flex-col">
                        <Text size={2} className="max-w-[461px] font-gupter font-medium text-[55px]">
                            Leat’s See What Our Customer Say
                        </Text>
                        <Paragraph className="max-w-[559px] mt-[62px] font-habibi text-[20px] leading-[28px] tracking-[2%]">
                            graphic design, Lorem ipsum is a place holder text commonly used to
                            demonstrate the visual form of a document or a typeface without relying ..
                        </Paragraph>
                        <Flex className="self-center gap-[88px] mt-[135px]">
                            <Flex className="flex-col">
                                <Text size={3} className="font-gupter font-bold text-[22px] tracking-[2%]">
                                    Istiak Mahmud
                                </Text>
                                <Text size={2} className="font-habibi font-normal text-[17px] leading-[50px] tracking-[2%]">
                                    08 August 2022
                                </Text>
                            </Flex>
                            <Rating rating={4} className="flex-1 mt-2 max-w-[110px] w-full" />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="items-center gap-[105px] px-[80px]">
                    <ImageContainer
                        src="customer-say-1.png"
                        alt="customer-say-1"
                        className="flex-1 max-w-[477px]"
                    />
                    <Flex className="flex-1 flex-col">
                        <Text size={2} className="max-w-[461px] font-gupter font-medium text-[55px]">
                            Leat’s See What Our Customer Say
                        </Text>
                        <Paragraph className="max-w-[559px] mt-[62px] font-habibi text-[20px] leading-[28px] tracking-[2%]">
                            graphic design, Lorem ipsum is a place holder text commonly used to
                            demonstrate the visual form of a document or a typeface without relying ..
                        </Paragraph>
                        <Flex className="self-center gap-[88px] mt-[135px]">
                            <Flex className="flex-col">
                                <Text size={3} className="font-gupter font-bold text-[22px] tracking-[2%]">
                                    Istiak Mahmud
                                </Text>
                                <Text size={2} className="font-habibi font-normal text-[17px] leading-[50px] tracking-[2%]">
                                    08 August 2022
                                </Text>
                            </Flex>
                            <Rating rating={4} className="flex-1 mt-2 max-w-[110px] w-full" />
                        </Flex>
                    </Flex>
                </Flex>
            </Slider>

            {/* Custom buttons */}
            <Flex className="gap-[18px] absolute right-0 bottom-4 z-10">
                <div className="cursor-pointer" onClick={() => sliderRef.current?.slickPrev()}>
                    <FiArrowLeftCircle
                        size={36}
                        className="hover:fill-[#B99272] transition-colors duration-300"
                    />
                </div>
                <div className="group cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
                    <FiArrowRightCircle
                        size={36}
                        className="hover:fill-[#B99272] transition-colors duration-300"
                    />
                </div>
            </Flex>

        </div>
    );
};
