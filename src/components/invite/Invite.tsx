import { useEffect, useRef, useState } from "react";
import LiquidBackground from "../common/LiquidBackground";
import Navbar from "../common/Navbar";
import './invite.css'
import yahGif from '../../assets/image/yah.gif';
import { AnimatePresence, motion } from "framer-motion";

const stepVariants = {
   initial: { opacity: 0, x: 50 },
   animate: { opacity: 1, x: 0 },
   exit: { opacity: 0, x: -50 },
   transition: { duration: 0.4, ease: "easeInOut" }
};

function Invite() {

   const [currentStep, setCurrentStep] = useState<number>(1);

   const noButtonRef = useRef<HTMLButtonElement>(null);

   const onYesButton = () => {
      setCurrentStep(2);
   };

   const onContinueButton = () => {
      setCurrentStep(3);
   }

   const [selectedDate, setSelectedDate] = useState<string | null>(null);
   const handleSelect = (date: string, time: string) => {
      const id = `${date}-${time}`;
      setSelectedDate(id);
   };

   const [shakeError, setShakeError] = useState(false);
   const handleNextStep4 = () => {
      if (!selectedDate) {
         setShakeError(true);

         setTimeout(() => setShakeError(false), 500);
      } else {
         setCurrentStep(4);
      }
   };

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         const btn = noButtonRef.current;
         if (!btn) return;

         const rect = btn.getBoundingClientRect();
         const btnX = rect.left + rect.width / 2;
         const btnY = rect.top + rect.height / 2;

         const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);
         const dodgeRadius = 150;

         if (distance < dodgeRadius) {
            const angle = Math.atan2(btnY - e.clientY, btnX - e.clientX);
            const dodgeDist = Math.min(500, (dodgeRadius - distance) * 2);

            let dx = Math.cos(angle) * dodgeDist;
            let dy = Math.sin(angle) * dodgeDist;

            const vpW = window.innerWidth;
            const vpH = window.innerHeight;
            const nextX = rect.left + dx;
            const nextY = rect.top + dy;

            if (nextX < 10) { dx = -rect.left + 70; }
            else if (nextX + rect.width > vpW) { dx = vpW - rect.right - 10; }
            if (nextY < 10) { dy = -rect.top + 70; }
            else if (nextY + rect.height > vpH) { dy = vpH - rect.bottom - 10; }

            btn.style.transform = `translate(${dx}px, ${dy}px)`;
            btn.style.transition = 'transform 0.2s ease-out';
         } else {
            btn.style.transform = 'translate(0, 0)';
         }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <div>
         <LiquidBackground></LiquidBackground>
         <Navbar></Navbar>

         {/* invite content */}
         <main>
            <div className="wizard-container">
               <AnimatePresence mode="wait">
                  {/* step 1 */}
                  {
                     currentStep === 1 && (
                        <motion.div
                           key="step1"
                           variants={stepVariants}
                           initial="initial"
                           animate="animate"
                           exit="exit"
                           className="step"
                        >
                           <h2><strong>Do you love me ?</strong></h2>
                           <div id="response-buttons">
                              <button
                                 className="modern-btn"
                                 onClick={onYesButton}>
                                 Yes
                              </button>
                              <button
                                 ref={noButtonRef}
                                 className="modern-btn runaway-btn">
                                 No
                              </button>
                           </div>
                        </motion.div>
                     )
                  }

                  {/* step 2 */}
                  {
                     currentStep === 2 && (
                        <motion.div
                           key="step2"
                           variants={stepVariants}
                           initial="initial"
                           animate="animate"
                           exit="exit"
                           className="step"
                        >
                           <h2>YEAHHHHH</h2>
                           <div id="happy-gif">
                              <img
                                 loading="lazy"
                                 decoding="async"
                                 src={yahGif}>
                              </img>
                           </div>
                           <button
                              onClick={onContinueButton}
                              className="long-effect-btn">
                              Continue
                           </button>
                        </motion.div>
                     )
                  }

                  {/* step 3 */}
                  {
                     currentStep === 3 && (
                        <motion.div
                           key="step3"
                           variants={stepVariants}
                           initial="initial"
                           animate="animate"
                           exit="exit"
                           className="step"
                        >
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
                           <button
                              type="button"
                              className="btn next-step right-bottom-btn"
                              onClick={handleNextStep4}>
                              Next
                           </button>
                        </motion.div>
                     )
                  }
               </AnimatePresence>
            </div>
         </main>
      </div>
   )
}

export default Invite