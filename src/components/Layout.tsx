import Navbar from './Navbar'
import LiquidBackground from './LiquidBackground'
import Header from './Header';
import HowItWorkImage from './HowItWorkImage';
import BenefitsSection from './BenefitsSection';
import TiktokSection from './TiktokSection';
import Footer from './Footer';

function Layout() {
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

export default Layout;