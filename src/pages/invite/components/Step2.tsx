import '../invite.css'
import yahGif from '../../../assets/gif/yah.gif';
import { useLanguage } from '../../../common/context/LanguageContext';

const Step2 = () => {
   const { t } = useLanguage();

   return (
      <>
         <h2>{t.step2.exclaim}</h2>
         <div className="happy-gif">
            <img
               loading="lazy"
               decoding="async"
               src={yahGif}>
            </img>
         </div>
      </>
   )
}

export default Step2;
