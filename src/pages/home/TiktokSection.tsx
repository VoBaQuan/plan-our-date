import video from '../../assets/video/journey.mp4';

const TiktokSection = () => {
   return (
      <section className="tiktok-section glass-panel">
         <div className="tiktok-content-wrapper">
            {/* <!-- Left Side: Text & CTA --> */}
            <div className="tiktok-text-content">
               <h2 className="section-subtitle tiktok-title">The story of us</h2>
               <p className="tiktok-desc">
               This video captures the journey we’ve traveled so far. I hope it keeps growing longer with each passing day and stays endless, just like us.
               </p>

               {/* <p className="tiktok-desc" style={{ marginBottom: '15px', fontWeight: '600' }}>Ready to make your next date night extra special?</p> */}

               {/* <a href="#" id="tiktok-signup-btn" className="cta-button-large tiktok-cta">Create Yours Now</a> */}

               {/* <div className="secondary-links" style={{ marginTop: '20px', textAlign: 'left' }}>
                  <a href="#how-it-works-image" style={{ fontSize: '0.9em' }}>How It Works</a> |
                  <a href="/browse-ideas.html" style={{ fontSize: '0.9em' }}>Browse Date Ideas</a>
               </div> */}
            </div>

            {/* <!-- Right Side: Video --> */}
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
               {/* <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@planyour.date/video/7469748714849062177"
                  data-video-id="7469748714849062177"
                  style={{ maxWidth: '605px', minWidth: '325px' }}
                  id="v94140691985240880">
                  <iframe name="__tt_embed__v94140691985240880"
                     sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
                     src="https://www.tiktok.com/embed/v2/7469748714849062177?lang=vi-VN&amp;referrer=https%3A%2F%2Fplanyour.date%2F"
                     style={{ width: '100%', height: '733px', display: 'block', visibility: 'unset', maxHeight: '733px' }}>

                  </iframe>
               </blockquote>
               <script async src="https://www.tiktok.com/embed.js"></script> */}
            </div>
         </div>
      </section>
   )
}

export default TiktokSection;