import { Outlet } from "react-router-dom";
import LiquidBackground from "../common/components/LiquidBackground";
import Navbar from "../common/components/Navbar";
import FloatingHearts from "../common/components/FloatingHearts";
import { useLanguage } from "../common/context/LanguageContext";

const MainLayout = () => {
   const { lang, toggleLang } = useLanguage();

   return (
      <>
         <LiquidBackground />
         <Navbar />

         <main>
            <Outlet />
         </main>

         <FloatingHearts />

         <button className="lang-fab" onClick={toggleLang} aria-label="Toggle language">
            <span className="lang-fab-flag">{lang === "en" ? "🇻🇳" : "🇬🇧"}</span>
            <span className="lang-fab-label">{lang === "en" ? "VI" : "EN"}</span>
         </button>
      </>
   )
}

export default MainLayout;