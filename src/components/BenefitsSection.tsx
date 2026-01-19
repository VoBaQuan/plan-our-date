function BenefitsSection() {
   return (
      <section id="benefits-section">
         <h2 className="section-subtitle">
            PlanYour.Date Helps You <strong>Shine</strong>
         </h2>
         <div className="benefits-container">
            <div className="benefit-item glass-panel">
               <div className="icon-glow">
                  <i className="fa-solid fa-star"></i>
               </div>
               <h3>Create Lasting Impressions</h3>
               <p>
                  Make every date memorable with unique experiences tailored to your style.
               </p>
            </div>
            <div className="benefit-item glass-panel">
               <div className="icon-glow">
                  <i className="fas fa-heartbeat"></i>
               </div>
               <h3>Foster Authentic Romance</h3>
               <p>
                  Let every date be a celebration of your unique bond. We handle the details.
               </p>
            </div>
            <div className="benefit-item glass-panel">
               <div className="icon-glow">
                  <i className="fas fa-calendar-check"></i>
               </div>
               <h3>Save Time &amp; Boost Confidence</h3>
               <p>
                  Eliminate second-guessing. Curated suggestions let you pick with confidence.
               </p>
            </div>
         </div>
      </section>
   )
}

export default BenefitsSection;