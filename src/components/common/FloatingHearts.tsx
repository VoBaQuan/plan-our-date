import { useEffect } from "react";

const FloatingHearts = () => {
   useEffect(() => {
      const createHeart = () => {
         const heart = document.createElement('div');
         heart.classList.add('heart');
         const maxWidth = window.innerWidth - 50;
         const minWidth = 50;
         const leftPosition = Math.random() * (maxWidth - minWidth) + minWidth;
         const bottomPosition = Math.random() * window.innerHeight * 0.8;
         heart.style.left = leftPosition + 'px';
         heart.style.bottom = bottomPosition + 'px';
         heart.style.animationDuration = Math.random() * 5 + 5 + 's';
         document.body.appendChild(heart);
         setTimeout(() => {
            heart.remove();
         }, 10000);
      }

      const interval = setInterval(createHeart, 500);
      return () => clearInterval(interval);
   }, []);

   return null;
}

export default FloatingHearts;