import { useRef, useState } from "react";
import './invite.css'
import { AnimatePresence, motion } from "framer-motion";

import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import { InviteSteps, type StepProps } from "./types";
import Step4 from "./step/Step4";

const stepVariants = {
   initial: { opacity: 0, scale: 0.9 },
   animate: { opacity: 1, scale: 1 },
   exit: { opacity: 0, scale: 1.1 },
   transition: { duration: 0.4, ease: "easeOut" }
};

const Invite = () => {

   const [currentStep, setCurrentStep] = useState<number>(InviteSteps.Step1);
   const step3Ref = useRef<StepProps>(null);
   const step4Ref = useRef<StepProps>(null);

   const renderStep = () => {
      switch (currentStep) {
         case InviteSteps.Step1:
            return <Step1 onNext={() => setCurrentStep(InviteSteps.Step2)} />;

         case InviteSteps.Step2:
            return <Step2 />;

         case InviteSteps.Step3:
            return <Step3 ref={step3Ref} />;

         case InviteSteps.Step4:
            return <Step4 ref={step4Ref} />;

         default: return null;
      }
   };

   const nextStep = () => {
      // return khi là step cuối

      if (currentStep === InviteSteps.Step3) {
         const isValid = step3Ref.current?.validate!();

         if (!isValid) return;
      }

      if (currentStep === InviteSteps.Step4) {
         const isValid = step4Ref.current?.validate!();

         if (!isValid) return;
      }

      setCurrentStep(currentStep + 1);
   }

   const backStep = () => {
      if (currentStep === InviteSteps.Step1) return;

      setCurrentStep(currentStep - 1);
   }

   return (
      <main>
         <div className="wizard-container">
            <AnimatePresence mode="wait">
               <motion.div
                  key={currentStep}
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="step"
               >
                  {renderStep()}
                  {currentStep !== 1 && (
                     <div className="step-footer">
                        <button
                           className="modern-btn runaway-btn"
                           onClick={backStep}>
                           Back
                        </button>
                        <button
                           className="long-effect-btn"
                           onClick={nextStep}>
                           Next
                        </button>
                     </div>
                  )}
               </motion.div>
            </AnimatePresence>
         </div>
      </main>
   )
}

export default Invite