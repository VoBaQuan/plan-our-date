import hero from '../../../assets/image/album/hug_you.jpg';
import landing from '../../../assets/image/album/kissing_you.jpg';
import kiss from '../../../assets/image/kisses/kiss.png';
import kiss1 from '../../../assets/image/kisses/kiss1.png';
import kiss2 from '../../../assets/image/kisses/kiss2.png';
import kiss3 from '../../../assets/image/kisses/kiss3.png';
import kiss4 from '../../../assets/image/kisses/kiss4.png';

import { useNavigate } from 'react-router-dom';

const Header = () => {
   const navigate = useNavigate();

   const startInvite = () => {
      navigate('invite')
   }

   return (
      <header className="hero-section">
         <div className="hero-content">
            <h1>You just stay beautiful, I’ll take care of the rest</h1>
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