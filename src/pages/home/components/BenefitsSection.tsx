import { useLanguage } from '../../../common/context/LanguageContext';

const BenefitsSection = () => {
   const { t } = useLanguage();

   return (
      <section id="benefits-section">
         <h2 className="section-subtitle">
            {t.benefits.heading}
         </h2>
         <div className="benefits-container">
            <div className="benefit-item glass-panel">
               <div className="icon-glow">
                  <i className="fa-solid fa-star"></i>
               </div>
               <h3>{t.benefits.card1Title}</h3>
               <p>{t.benefits.card1Desc}</p>
            </div>
            <div className="benefit-item glass-panel">
               <div className="icon-glow">
                  <i className="fas fa-heartbeat"></i>
               </div>
               <h3>{t.benefits.card2Title}</h3>
               <p>{t.benefits.card2Desc}</p>
            </div>
            <div className="benefit-item glass-panel">
               <div className="icon-glow">
                  <i className="fas fa-calendar-check"></i>
               </div>
               <h3>{t.benefits.card3Title}</h3>
               <p>{t.benefits.card3Desc}</p>
            </div>
         </div>
      </section>
   )
}

export default BenefitsSection;
