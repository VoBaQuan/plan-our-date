import { forwardRef, useImperativeHandle, useState } from "react";
import type { StepProps } from "../types";

import food1 from '../../../assets/image/foods/pizza.webp';
import food2 from '../../../assets/image/foods/pizza.webp';
import food3 from '../../../assets/image/foods/pizza.webp';
import food4 from '../../../assets/image/foods/pizza.webp';

interface Food {
   id: string,
   name: string,
   imgUrl?: string,
}

const foodArray: Food[] = [
   {
      id: 'food1',
      name: 'Pizza',
      imgUrl: food1,
   },
   {
      id: 'food2',
      name: 'Sushi',
      imgUrl: food2,
   },
   {
      id: 'food3',
      name: 'Ramen',
      imgUrl: food3,
   },
   {
      id: 'food4',
      name: 'Rice',
      imgUrl: food4,
   }
];

const Step4 = forwardRef<StepProps, any>((_props, ref) => {

   const [shakeError, setShakeError] = useState(false);
   const [selectedFood, setSelectedFood] = useState<string | null>(null);

   const handleSelect = (foodId: string) => {
      setSelectedFood(foodId);
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
         <h2>WHAT WOULD YOU LIKE TO EAT?</h2>
         <div
            className={`error-message ${shakeError ? 'shake' : ''}`}>
            Pick whatever you want to eat, baby! ❤️
         </div>
         <div className="food-container">
            {foodArray.map((food: Food) => (
               <div
                  className={`food-item ${selectedFood === food.id ? "selected" : ""}`}
                  key={food.id}
                  onClick={() => handleSelect(food.id)}>
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