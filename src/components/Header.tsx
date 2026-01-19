import hero from '../assets/image/hero.webp';
import landing from '../assets/image/landing.webp';
import boy1 from '../assets/image/boy1.webp';
import boy2 from '../assets/image/boy2.webp';
import girl from '../assets/image/girl.webp';


function Header() {
   return (
      <header className="hero-section">
         <div className="hero-content">
            <h1>Plan Your Next Unforgettable Date in Minutes</h1>
            <p className="hero-tagline">We handle the details—you focus on the romance!</p>
            <a href="/invite/demo" className="cta-button-large">
               CREATE A DEMO INVITATION
               <span className="cta-subtitle">(No Signup Required)</span>
            </a>
            <div className="user-proof">
               <div className="avatars">
                  <img src={boy1} alt="User 1" className="avatar-circle"></img>
                  <img src={girl} alt="User 2" className="avatar-circle"></img>
                  <img src={boy2} alt="User 3" className="avatar-circle"></img>
               </div>
               <p>Join <strong>5,000+</strong> happy couples!</p>
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