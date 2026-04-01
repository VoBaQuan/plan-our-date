import { forwardRef, useImperativeHandle, useState } from "react";
import type { StepProps } from "../types";
import { useInvite } from "../useInvite";
import { useLanguage } from "../../../common/context/LanguageContext";

import activity1 from '../../../assets/image/activities/shopping.jpg';
import activity2 from '../../../assets/image/activities/photobooth.jpg';
import activity3 from '../../../assets/image/activities/sunshine.jpg';
import activity4 from '../../../assets/image/activities/uniqlo.jpg';

export interface Activity {
   id: string,
   name: string,
   imgUrl?: string,
}

const activityImgs = [activity1, activity2, activity3, activity4];

const Step5 = forwardRef<StepProps, object>((_props, ref) => {
   const { formData, updateFormData } = useInvite();
   const { t } = useLanguage();
   const [shakeError, setShakeError] = useState(false);
   const [selectedActivity, setSelectedActivity] = useState<string | null>(formData.selectedActivity?.id || '');

   const activityList: Activity[] = t.step5.activities.map((name, i) => ({
      id: `activity${i + 1}`,
      name,
      imgUrl: activityImgs[i],
   }));

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
         <h2>{t.step5.title}</h2>
         <div className={`error-message ${shakeError ? 'shake' : ''}`}>
            {t.step5.hint}
         </div>
         <div className="activity-container">
            {activityList.map((activity) => (
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
            ))}
         </div>
      </>
   )
})

export default Step5;
