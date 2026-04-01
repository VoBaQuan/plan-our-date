import { forwardRef, useImperativeHandle, useState } from "react";
import type { StepProps } from "../types";
import { useInvite } from "../useInvite";
import { useLanguage } from "../../../common/context/LanguageContext";

import food1 from '../../../assets/image/foods/pizza.webp';
import food2 from '../../../assets/image/foods/sushi.jpg';
import food3 from '../../../assets/image/foods/ramen.jpg';
import food4 from '../../../assets/image/foods/haidilao.jpg';

export interface Food {
   id: string,
   name: string,
   imgUrl?: string,
}

const foodImgs = [food1, food2, food3, food4];

const Step4 = forwardRef<StepProps, object>((_props, ref) => {
   const { formData, updateFormData } = useInvite();
   const { t } = useLanguage();
   const [shakeError, setShakeError] = useState(false);
   const [selectedFood, setSelectedFood] = useState<string>(formData.selectedFood?.id || '');

   const foodArray: Food[] = t.step4.foods.map((name, i) => ({
      id: `food${i + 1}`,
      name,
      imgUrl: foodImgs[i],
   }));

   const handleSelect = (food: Food) => {
      setSelectedFood(food.id);
      updateFormData({ selectedFood: food });
   };

   useImperativeHandle(ref, () => ({
      validate: () => {
         if (!selectedFood) {
            setShakeError(true);
            setTimeout(() => setShakeError(false), 500);
            return false;
         }
         return true;
      },
   }));

   return (
      <>
         <h2>{t.step4.title}</h2>
         <div className={`error-message ${shakeError ? 'shake' : ''}`}>
            {t.step4.hint}
         </div>
         <div className="food-container">
            {foodArray.map((food: Food) => (
               <div
                  className={`food-item ${selectedFood === food.id ? "selected" : ""}`}
                  key={food.id}
                  onClick={() => handleSelect(food)}>
                  <img
                     loading="lazy"
                     decoding="async"
                     src={food.imgUrl}>
                  </img>
                  <label>{food.name}</label>
               </div>
            ))}
         </div>
      </>
   )
})

export default Step4;
