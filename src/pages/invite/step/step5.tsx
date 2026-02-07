import { forwardRef, useImperativeHandle, useState } from "react";
import type { StepProps } from "../types";

import activity1 from '../../../assets/image/foods/pizza.webp';
import activity2 from '../../../assets/image/foods/pizza.webp';
import activity3 from '../../../assets/image/foods/pizza.webp';
import activity4 from '../../../assets/image/foods/pizza.webp';

interface TodoList {
   id: string,
   name: string,
   imgUrl?: string,
}

const todoList: TodoList[] = [
   {
      id: 'todo1',
      name: 'Play game',
      imgUrl: activity1,
   },
   {
      id: 'todo2',
      name: 'Play game',
      imgUrl: activity2,
   },
   {
      id: 'todo3',
      name: 'Play game',
      imgUrl: activity3,
   },
   {
      id: 'todo4',
      name: 'Play game',
      imgUrl: activity4,
   }
]

const Step5 = forwardRef<StepProps, any>((_props, ref) => {

   const [shakeError, setShakeError] = useState(false);
   const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

   const handleSelectActivity = (foodId: string) => {
      setSelectedActivity(foodId);
   };

   useImperativeHandle(ref, () => ({
      validate: () => {
         if (!selectedActivity) {
            setShakeError(true);
            setTimeout(() => setShakeError(false), 500);
            return false;
         }
         return true;
      },
   }));

   return (
      <>
         <h2>WHAT WOULD YOU LIKE TO DO?</h2>
         <div
            className={`error-message ${shakeError ? 'shake' : ''}`}>
            Pick whatever you want to do, baby! ❤️
         </div>
         <div className="activity-container">
            {
               todoList.map((item) => (
                  <div
                     key={item.id}
                     className={`activity-item ${selectedActivity === item.id ? "selected" : ""}`}
                     onClick={() => handleSelectActivity(item.id)}>
                     <img
                        loading="lazy"
                        decoding="async"
                        src={item.imgUrl}>
                     </img>
                     <label>{item.name}</label>
                  </div>
               ))
            }

         </div>
         {/* <div id="activity-images" className="activity-images-container"></div> */}
         {/* <button type="button" className="btn next-step right-bottom-btn">Next</button> */}
      </>
   )

})

export default Step5;