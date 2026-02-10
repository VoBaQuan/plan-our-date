import { forwardRef, useImperativeHandle, useState } from "react";
import type { StepProps } from "../types";

import activity1 from '../../../assets/image/foods/pizza.webp';
import activity2 from '../../../assets/image/foods/pizza.webp';
import activity3 from '../../../assets/image/foods/pizza.webp';
import activity4 from '../../../assets/image/foods/pizza.webp';
import { useInvite } from "../InviteContext";

export interface Activity {
   id: string,
   name: string,
   imgUrl?: string,
}

const activityList: Activity[] = [
   {
      id: 'activity1',
      name: 'Play game',
      imgUrl: activity1,
   },
   {
      id: 'activity2',
      name: 'Play game',
      imgUrl: activity2,
   },
   {
      id: 'activity3',
      name: 'Play game',
      imgUrl: activity3,
   },
   {
      id: 'activity4',
      name: 'Play game',
      imgUrl: activity4,
   }
]

const Step5 = forwardRef<StepProps, any>((_props, ref) => {

   const { formData, updateFormData } = useInvite();
   const [shakeError, setShakeError] = useState(false);
   const [selectedActivity, setSelectedActivity] = useState<string | null>(formData.selectedActivity?.id || '');

   const handleSelectActivity = (activity: Activity) => {
      setSelectedActivity(activity.id);
      updateFormData({ selectedActivity: activity });
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
               activityList.map((activity) => (
                  <div
                     key={activity.id}
                     className={`activity-item ${selectedActivity === activity.id ? "selected" : ""}`}
                     onClick={() => handleSelectActivity(activity)}>
                     <img
                        loading="lazy"
                        decoding="async"
                        src={activity.imgUrl}>
                     </img>
                     <label>{activity.name}</label>
                  </div>
               ))
            }
         </div>
      </>
   )

})

export default Step5;