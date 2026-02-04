import { forwardRef, useImperativeHandle, useState } from 'react';
import '../invite.css'
import type { StepProps } from "../types";

const Step3 = forwardRef<StepProps, any>((props, ref) => {
   const [selectedDate, setSelectedDate] = useState<string | null>(null);
   const handleSelect = (date: string, time: string) => {
      const id = `${date}-${time}`;
      setSelectedDate(id);
   };

   const [shakeError, setShakeError] = useState(false);

   useImperativeHandle(ref, () => ({
      validate: () => {
         if (!selectedDate) {
            setShakeError(true);
            setTimeout(() => setShakeError(false), 500); // Reset hiệu ứng rung
            return false;
         }
         return true;
      },
   }));
   // const nextStep = () => {
   //    if (!selectedDate) {
   //       setShakeError(true);

   //       setTimeout(() => setShakeError(false), 500);
   //    } else {
   //       onNext();
   //    }
   // };

   return (
      <>
         <h2>WHEN ARE YOU FREE?</h2>
         <div
            className={`error-message ${shakeError ? 'shake' : ''}`}>
            You decide the time, my love! ❤️
         </div>
         <div className="dates-container">
            <div
               className={`date-box ${selectedDate === "2025-08-15-19:00" ? "selected" : ""}`}
               onClick={() => handleSelect("2025-08-15", "19:00")}>
               15.08.2025 19:00
            </div>
            <div
               className={`date-box ${selectedDate === "2025-08-15-20:00" ? "selected" : ""}`}
               onClick={() => handleSelect("2025-08-15", "20:00")}>
               15.08.2025 20:00
            </div>
            <div
               className={`date-box ${selectedDate === "2025-08-16-18:30" ? "selected" : ""}`}
               onClick={() => handleSelect("2025-08-16", "18:30")}>
               16.08.2025 18:30
            </div>
         </div>
         {/* <button
            type="button"
            className="btn next-step right-bottom-btn"
            onClick={nextStep}>
            Next
         </button> */}
      </>
   )
})

export default Step3;