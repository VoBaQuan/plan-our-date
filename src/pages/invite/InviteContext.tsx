import { useCallback, useState, type ReactNode } from "react";
import { InviteContext, type InviteData } from "./inviteContextDef";

export const InviteProvider = ({ children }: { children: ReactNode }) => {
   const [formData, setFormData] = useState<InviteData>({});

   const updateFormData = useCallback((newData: Partial<InviteData>) => {
      setFormData((prev) => ({ ...prev, ...newData }));
   }, []);

   const resetFormData = useCallback(() => setFormData({}), []);

   return (
      <InviteContext.Provider value={{ formData, updateFormData, resetFormData }}>
         {children}
      </InviteContext.Provider>
   );
};
