
function HowItWorkImage() {
   return (
      <section id="how-it-works-image" className="flex-container">
         <div className="box-wrapper">
            <h2 className="section-title">How It Works</h2>
            <div className="steps-grid">
               {/* <!-- Step 1 --> */}
               <div className="glass-panel step-card">
                  <div className="step-number">1</div>
                  <h3>Create Invitation</h3>
                  <p>Choose your ideal date and time, select a meal, and even pick an activity if you wish.</p>
               </div>

               {/* <!-- Step 2 --> */}
               <div className="glass-panel step-card">
                  <div className="step-number">2</div>
                  <h3>Share the Link</h3>
                  <p>We transform your choices into an adorable invitation to send to your special someone.</p>
               </div>

               {/* <!-- Step 3 --> */}
               <div className="glass-panel step-card">
                  <div className="step-number">3</div>
                  <h3>Get a Yes!</h3>
                  <p>Your loved one fills out the invitation, and you view their reply on your dashboard.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HowItWorkImage;