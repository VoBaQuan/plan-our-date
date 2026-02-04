import { Outlet } from "react-router-dom";
import LiquidBackground from "../common/components/LiquidBackground";
import Navbar from "../common/components/Navbar";
import FloatingHearts from "../common/components/FloatingHearts";

const MainLayout = () => {
   return (
      <>
         <LiquidBackground />
         <Navbar />

         <main>
            <Outlet />
         </main>

         <FloatingHearts />
      </>
   )
}

export default MainLayout;