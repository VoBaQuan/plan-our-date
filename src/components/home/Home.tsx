import Navbar from '../common/Navbar'
import LiquidBackground from '../common/LiquidBackground'
import Header from './Header';
import HowItWorkImage from './HowItWorkImage';
import TiktokSection from './TiktokSection';

function Home() {
   return (
      <div className="reveal-effect">
         <LiquidBackground></LiquidBackground>
         <Navbar></Navbar>
         <Header></Header>
         <HowItWorkImage></HowItWorkImage>
         {/* <BenefitsSection></BenefitsSection> */}
         <TiktokSection></TiktokSection>
         {/* <Footer></Footer> */}
      </div>
   )
}

export default Home;