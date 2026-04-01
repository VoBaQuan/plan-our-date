import { useLanguage } from '../../../common/context/LanguageContext';

const HowItWorkImage = () => {
   const { t } = useLanguage();

   return (
      <section id="how-it-works-image" className="flex-container">
         <div className="box-wrapper">
            <h2 className="section-title">{t.howItWorks.title}</h2>
            <div className="steps-grid">
               <div className="glass-panel step-card">
                  <div className="step-number">1</div>
                  <h3>{t.howItWorks.step1Title}</h3>
                  <p>{t.howItWorks.step1Desc}</p>
               </div>
               <div className="glass-panel step-card">
                  <div className="step-number">2</div>
                  <h3>{t.howItWorks.step2Title}</h3>
                  <p>{t.howItWorks.step2Desc}</p>
               </div>
               <div className="glass-panel step-card">
                  <div className="step-number">3</div>
                  <h3>{t.howItWorks.step3Title}</h3>
                  <p>{t.howItWorks.step3Desc}</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HowItWorkImage;
