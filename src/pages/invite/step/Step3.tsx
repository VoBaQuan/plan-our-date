import { forwardRef, useImperativeHandle, useState } from 'react';
import '../invite.css'
import type { StepProps } from "../types";
import { useInvite } from '../InviteContext';

interface Date {
   id: string,
   value: string
}

const dateArray: Date[] = [
   {
      id: 'date1',
      value: '14/02/2026 19:00',
   },
   {
      id: 'date2',
      value: '14/02/2026 19:00',
   },
   {
      id: 'date3',
      value: '14/02/2026 19:00',
   },
   {
      id: 'date4',
      value: '14/02/2026 19:00',
   },
]

const Step3 = forwardRef<StepProps, any>((_props, ref) => {
   const { formData, updateFormData } = useInvite();
   const [selectedDate, setSelectedDate] = useState<string>(formData.selectedDate || '');
   const handleSelect = (date: Date) => {
      setSelectedDate(date.id);
      updateFormData({selectedDate: date.id})
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
                     {date.value}
                  </div>
               ))
            }
         </div>
      </>
   )
})

export default Step3;