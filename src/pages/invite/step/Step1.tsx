import { useEffect, useRef, useState } from "react";
import '../invite.css';
import type { StepProps } from "../types";
import { motion, type Variants } from "framer-motion";

import shyGif from '../../../assets/image/89355081a213ca3f622b0b39b94e9016.gif';

const Step1 = ({ onNext }: StepProps) => {
   const noButtonRef = useRef<HTMLButtonElement>(null);
   const [noScale, setNoScale] = useState(1);
   const [pulseYes, setPulseYes] = useState(false);
   const isMobile = window.innerWidth <= 768;

   const handleNoClick = () => {
      if (noScale > 0.2) {
         setNoScale((prev) => prev - 0.2);
      }
   }

   const handleNoAction = () => {
      if (!isMobile) return;

      setPulseYes(true);
      setTimeout(() => setPulseYes(false), 500);
      handleNoClick();
   }

   const pulseVariants: Variants = {
      rest: { scale: 1, transition: { duration: 0.2 } },
      pulsing: {
         scale: [1, 2, 1], // To lên 2 lần rồi về 1
         transition: {
            duration: 0.3, // Thời gian cho một nhịp đập
            ease: "easeInOut",
            repeat: 0, // Chỉ đập một lần
         }
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
      <>
         <h2><strong>Do you love me ?</strong></h2>
         <div className="shy-gif">
            <img
               loading="lazy"
               decoding="async"
               src={shyGif}>
            </img>
         </div>
         <div className="step-footer">
            {
               isMobile && (
                  <motion.button
                     layout
                     animate={{ scale: noScale, opacity: noScale }}
                     transition={{
                        type: "spring",
                        stiffness: 800,
                        damping: 40,
                        mass: 0.5
                     }}
                     onPointerDown={handleNoAction}
                     className="modern-btn runaway-btn"
                     style={{
                        visibility: noScale <= 0.2 ? "hidden" : "visible",
                     }}
                  >
                     No
                  </motion.button>
               )
            }
            {
               !isMobile && (
                  <button
                     ref={noButtonRef}
                     className="modern-btn runaway-btn">
                     No
                  </button>
               )
            }

            <motion.button
               layout
               key="yes-btn"
               variants={pulseVariants}
               animate={pulseYes ? "pulsing" : "rest"}
               transition={{ type: "spring", stiffness: 500, damping: 30 }}
               className="modern-btn"
               onClick={onNext}>
               Yes
            </motion.button>
         </div>
      </>
   )
}

export default Step1;