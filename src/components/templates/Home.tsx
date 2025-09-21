import Flex from "../ui/molecules/Flex"
import Banner from "../ui/organisms/Banner"
import Clients from "../ui/organisms/Clients"
import Footer from "../ui/organisms/Footer"
import Header from "../ui/organisms/Header"
import Products from "../ui/organisms/Products"

const Home = () => {
    return (
        <Flex className="flex-col h-screen">
            <div className="shrink">
                <Header />
            </div>
            <div className="flex-1">
                <Banner />
                <Clients />
                <Products />
            </div>
            <div className="shrink">
                <Footer />
            </div>
        </Flex>
    )
}

export default Home