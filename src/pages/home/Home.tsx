import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "./sections/Hero"
import Awards from "./sections/Awards"
import Bestseller from "./sections/Bestseller"
import Favorites from "./sections/Favorites"
import Releases from "./sections/Releases"

const Home = () => {
  return (
    <main>
      <div className="flex flex-col bg-[#e4e4e7]">
        <Header />
        <Hero />
      </div>
      <Bestseller/>
      <Favorites/>
      <Awards/>
      <Releases/>
      <Footer/>
    </main>
  )
}

export default Home