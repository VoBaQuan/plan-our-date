import { useEffect, useState } from 'react';
import { useInvite } from '../InviteContext';
import excitedGif from '../../../assets/gif/giphy.gif';
import shy2 from '../../../assets/gif/shy2.gif';
import sad from '../../../assets/gif/sad.gif';

const Step6 = () => {

   const [level, setLevel] = useState(5);
   const [excitedLevel, setExcitedLevel] = useState<string>(shy2);
   const { updateFormData } = useInvite();

   useEffect(() => {
      updateFormData({ excitementLevel: 5 });
      setLevel(5);
   }, []);

   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value);

      if (newValue <= 4) {
         setExcitedLevel(sad);
      }

      if (newValue >= 5) {
         setExcitedLevel(shy2);
      }

      if (newValue >=9 ) {
         setExcitedLevel(excitedGif);
      }

      setLevel(newValue);
      updateFormData({ excitementLevel: newValue });

      createFlyingHeart(e);
   };

   const createFlyingHeart = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent) => {
      const slider = e.target as HTMLInputElement;
      const sliderRect = slider.getBoundingClientRect();

      const sliderVal = parseFloat(slider.value);
      const maxVal = parseFloat(slider.max) || 10;
      const thumbX = sliderRect.left + (sliderVal / maxVal) * sliderRect.width;
      const thumbY = sliderRect.top + (sliderRect.height / 2) - 15;

      const heart = document.createElement('i');
      heart.classList.add('fa-solid', 'fa-heart', 'flying-heart');
      document.body.appendChild(heart);

      heart.style.left = `${thumbX}px`;
      heart.style.top = `${thumbY}px`;

      setTimeout(() => {
         heart.remove();
      }, 2000);
   }

   return (
      <>
         <h2>HOW MUCH DO YOU LOVE ME?</h2>
         <div className="excitement-section">
            <img
               loading="lazy"
               decoding="async"
               src={excitedLevel}>
            </img>
            <input
               type="range"
               min="1"
               max="10"
               value={level}
               onChange={handleSliderChange}>
            </input>
            <p>Max level of love: <span>{level}</span></p>
         </div>
      </>
   )
}

export default Step6


