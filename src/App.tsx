import Footer from "./components/Footer"
import Header from "./components/Header"
import Container from "./components/ui/Container"
import Flex from "./components/ui/Flex"

const App: React.FC = () => {
  return (
    <Flex className="flex-col h-screen">
      <div className="shrink">
        <Header />
      </div>
      <div className="flex-1">
        <Container>
          main
        </Container>
      </div>
      <div className="shrink">
        <Footer />
      </div>
    </Flex>
  )
}

export default App