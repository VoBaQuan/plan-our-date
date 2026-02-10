import video from '../../assets/video/journey.mp4';

const TiktokSection = () => {
   return (
      <section className="tiktok-section glass-panel">
         <div className="tiktok-content-wrapper">
            <div className="tiktok-text-content">
               <h2 className="section-subtitle tiktok-title">The story of us</h2>
               <p className="tiktok-desc">
               This video captures the journey we’ve traveled so far. I hope it keeps growing longer with each passing day and stays endless, just like us.
               </p>
            </div>

            <div className="tiktok-embed-container">
               <video
                  className="tiktok-embed"
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  preload="metadata">
                  <source src={video} type="video/mp4" />
               </video>
            </div>
         </div>
      </section>
   )
}

export default TiktokSection;