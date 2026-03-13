import { useContext } from "react";
import { InviteContext } from "./inviteContextDef";

export const useInvite = () => {
   const context = useContext(InviteContext);
   if (!context) throw new Error("useInvite must be used within an InviteProvider");
   return context;
};
