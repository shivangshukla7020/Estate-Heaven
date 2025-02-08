import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Featured from '../components/home/Featured'
import Hero from '../components/home/Hero'
import WhyChooseUs from '../components/home/WhyChoseUs'

function Home() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <Featured/>
        <WhyChooseUs/>
        <Footer/>
    </>
  )
}

export default Home
