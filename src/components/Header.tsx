import hero from '../assets/image/hugyou.jpg';
import landing from '../assets/image/kissingyou.jpg';
import boy1 from '../assets/image/kissing.png';
import boy2 from '../assets/image/kiss.png';
import girl from '../assets/image/couple.png';


function Header() {
   return (
      <header className="hero-section">
         <div className="hero-content">
            <h1>You just stay beautiful, I’ll take care of the rest</h1>
            {/* <p className="hero-tagline">We handle the details—you focus on the romance!</p> */}
            <a href="/invite/demo" className="cta-button-large">
            Continuing our journey of love
            </a>
            <div className="user-proof">
               <div className="avatars">
                  <img src={boy1} alt="User 1" className="avatar-circle"></img>
                  <img src={boy2} alt="User 3" className="avatar-circle"></img>
                  <img src={girl} alt="User 2" className="avatar-circle"></img>
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