import { forwardRef, useImperativeHandle, useState } from 'react';
import '../invite.css'
import type { StepProps } from "../types";
import { useInvite } from '../useInvite';
import { useLanguage } from '../../../common/context/LanguageContext';

export interface Date {
   id: string,
   date: string
   time: string,
}

const dateArray: Date[] = [
   { id: 'date1', date: '20/10/2026', time: '18:30' },
   { id: 'date2', date: '20/10/2026', time: '19:00' },
   { id: 'date3', date: '20/10/2026', time: '19:30' },
]

const Step3 = forwardRef<StepProps, object>((_props, ref) => {
   const { formData, updateFormData } = useInvite();
   const { t } = useLanguage();
   const [selectedDate, setSelectedDate] = useState<string>(formData.selectedDate?.id || '');
   const [shakeError, setShakeError] = useState(false);

   const handleSelect = (date: Date) => {
      setSelectedDate(date.id);
      updateFormData({ selectedDate: date })
   };

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
         <h2>{t.step3.title}</h2>
         <div className={`error-message ${shakeError ? 'shake' : ''}`}>
            {t.step3.hint}
         </div>
         <div className="dates-container">
            {dateArray.map((date: Date) => (
               <div
                  key={date.id}
                  className={`date-box ${selectedDate === date.id ? 'selected' : ''}`}
                  onClick={() => handleSelect(date)}>
                  {date.date} {date.time}
               </div>
            ))}
         </div>
      </>
   )
})

export default Step3;
