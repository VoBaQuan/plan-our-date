import video from '../../../assets/video/loving.mp4';
import { useLanguage } from '../../../common/context/LanguageContext';

const TiktokSection = () => {
   const { t } = useLanguage();

   return (
      <section className="tiktok-section glass-panel">
         <div className="tiktok-content-wrapper">
            <div className="tiktok-text-content">
               <h2 className="section-subtitle tiktok-title">{t.tiktok.title}</h2>
               <p className="tiktok-desc">{t.tiktok.desc}</p>
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
