import { useEffect, useRef, useState } from "react";
import '../invite.css';
import type { StepProps } from "../types";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "../../../common/context/LanguageContext";

import shyGif from '../../../assets/gif/shy1.gif';

const Step1 = ({ onNext }: StepProps) => {
   const noButtonRef = useRef<HTMLButtonElement>(null);
   const [noScale, setNoScale] = useState(1);
   const [pulseYes, setPulseYes] = useState(false);
   const isMobile = window.innerWidth <= 768;
   const { t } = useLanguage();

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
         scale: [1, 2, 1],
         transition: {
            duration: 0.3,
            ease: "easeInOut",
            repeat: 0,
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
         <h2><strong>{t.step1.question}</strong></h2>
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
                     {t.step1.no}
                  </motion.button>
               )
            }
            {
               !isMobile && (
                  <button
                     ref={noButtonRef}
                     className="modern-btn runaway-btn">
                     {t.step1.no}
                  </button>
               )
            }

            <motion.button
               variants={pulseVariants}
               animate={pulseYes ? "pulsing" : "rest"}
               transition={{ type: "spring", stiffness: 500, damping: 30 }}
               className="modern-btn"
               onClick={onNext}>
               {t.step1.yes}
            </motion.button>
         </div>
      </>
   )
}

export default Step1;
