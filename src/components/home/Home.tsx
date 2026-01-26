import Navbar from '../common/Navbar'
import LiquidBackground from '../common/LiquidBackground'
import Header from './Header';
import HowItWorkImage from './HowItWorkImage';
import TiktokSection from './TiktokSection';

function Home() {
   return (
      <div>
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