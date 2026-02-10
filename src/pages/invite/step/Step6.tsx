import { useState } from 'react';
import excitedGif from '../../../assets/gif/giphy.gif';
import { useInvite } from '../InviteContext';

const Step6 = () => {

   const [level, setLevel] = useState(6);
   const { updateFormData } = useInvite();

   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value);
      setLevel(newValue);
      updateFormData({excitementLevel: newValue});

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
         <h2> HOW EXCITED ARE YOU?</h2>
         <div className="excitement-section">
            <img
               loading="lazy"
               decoding="async"
               src={excitedGif}>
            </img>
            <input
               type="range"
               min="1"
               max="10"
               value={level}
               onChange={handleSliderChange}>
            </input>
            <p>Your excitement level is: <span>{level}</span></p>
         </div>
      </>
   )
}

export default Step6


