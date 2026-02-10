import { useEffect, useRef, useState } from "react";
import './invite.css'
import { AnimatePresence, motion } from "framer-motion";
import { InviteSteps, type StepProps } from "./types";
import { useInvite } from "./InviteContext";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
import Step5 from "./step/Step5";
import Step6 from "./step/Step6";
import Step7 from "./step/Step7";

const stepVariants = {
   initial: { opacity: 0, scale: 0.9 },
   animate: { opacity: 1, scale: 1 },
   exit: { opacity: 0, scale: 1.1 },
   transition: { duration: 0.4, ease: "easeOut" }
};

const Invite = () => {

   const { formData, resetFormData } = useInvite();

   const [currentStep, setCurrentStep] = useState<number>(InviteSteps.Step1);
   const step3Ref = useRef<StepProps>(null);
   const step4Ref = useRef<StepProps>(null);
   const step5Ref = useRef<StepProps>(null);

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

         case InviteSteps.Step5:
            return <Step5 ref={step5Ref} />;

         case InviteSteps.Step6:
            return <Step6 />;

         case InviteSteps.Step7:
            return <Step7 />;

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

      if (currentStep === InviteSteps.Step3) {
         resetFormData();
      }
   }

   useEffect(() => {
      console.log(" Current Context Data:", formData);
   }, [formData]);

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
                  {currentStep !== 1 && currentStep !== 7 && (
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