import hero from '../../assets/image/hugyou.jpg';
import landing from '../../assets/image/kissingyou.jpg';
import kiss from '../../assets/image/kiss.png';
import kiss1 from '../../assets/image/kiss1.png';
import kiss2 from '../../assets/image/kiss2.png';
import kiss3 from '../../assets/image/kiss3.png';
import kiss4 from '../../assets/image/kiss4.png';
import { useNavigate } from 'react-router-dom';


function Header() {
   const navigate = useNavigate();

   const startInvite = () => {
      navigate('invite')
   }

   return (
      <header className="hero-section">
         <div className="hero-content">
            <h1>You just stay beautiful, I’ll take care of the rest</h1>
            {/* <p className="hero-tagline">We handle the details—you focus on the romance!</p> */}
            <a
               className="cta-button-large"
               onClick={startInvite}>
               Continuing our journey of love
            </a>
            <div className="user-proof">
               <div className="avatars">
                  <img src={kiss} alt="User 1" className="avatar-circle"></img>
                  <img src={kiss1} alt="User 3" className="avatar-circle"></img>
                  <img src={kiss2} alt="User 2" className="avatar-circle"></img>
                  <img src={kiss3} alt="User 2" className="avatar-circle"></img>
                  <img src={kiss4} alt="User 2" className="avatar-circle"></img>
               </div>
               <p>Give you <strong>9,999+</strong> kisses!</p>
            </div>
         </div>
         <div className="hero-image">
            <div className="hero-image-stack">
               <img src={hero} alt="Illustration of a happy couple on a balcony" className="hero-img-back"></img>
               <img src={landing} alt="Couple in a cafe" className="hero-img-front"></img>
            </div>
         </div>
      </header>
   )
}

export default Header