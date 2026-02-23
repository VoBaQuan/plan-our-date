import { forwardRef, useImperativeHandle, useState } from 'react';
import '../invite.css'
import type { StepProps } from "../types";
import { useInvite } from '../InviteContext';

export interface Date {
   id: string,
   date: string
   time: string,
}

const dateArray: Date[] = [
   {
      id: 'date1',
      date: '14/02/2026',
      time: '18:30'
   },
   {
      id: 'date2',
      date: '14/02/2026',
      time: '19:00'
   },
   {
      id: 'date3',
      date: '14/02/2026',
      time: '19:30'
   },
]

const Step3 = forwardRef<StepProps, any>((_props, ref) => {
   const { formData, updateFormData } = useInvite();
   const [selectedDate, setSelectedDate] = useState<string>(formData.selectedDate?.id || '');
   const handleSelect = (date: Date) => {
      setSelectedDate(date.id);
      updateFormData({selectedDate: date})
   };

   const [shakeError, setShakeError] = useState(false);

   useImperativeHandle(ref, () => ({
      validate: () => {
         if (!selectedDate) {
            setShakeError(true);
            setTimeout(() => setShakeError(false), 500);
            return false;
         }
         return true;
      },
   }));

   return (
      <>
         <h2>WHEN ARE YOU FREE?</h2>
         <div
            className={`error-message ${shakeError ? 'shake' : ''}`}>
            You decide the time, my love! ❤️
         </div>
         <div className="dates-container">
            {
               dateArray.map((date: Date) => (
                  <div
                     key={date.id}
                     className={`date-box ${selectedDate === date.id ? 'selected' : ''}`}
                     onClick={() => handleSelect(date)}>
                     {date.date} {date.time}
                  </div>
               ))
            }
         </div>
      </>
   )
})

export default Step3;