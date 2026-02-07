import { createContext, useContext, useState, type ReactNode } from "react";

interface InviteData {
   selectedDate?: string;
   selectedFood?: string;
   selectedActivity?: string;
   excitementLevel?: number;
   message?: string;
}

interface InviteContextType {
   formData: InviteData;
   updateFormData: (newData: Partial<InviteData>) => void;
   resetFormData: () => void;
}

const InviteContext = createContext<InviteContextType | undefined>(undefined);

export const InviteProvider = ({ children }: { children: ReactNode }) => {
   const [formData, setFormData] = useState<InviteData>({});

   const updateFormData = (newData: Partial<InviteData>) => {
      setFormData((prev) => ({ ...prev, ...newData }));
   };

   const resetFormData = () => setFormData({});

   return (
      <InviteContext.Provider value={{ formData, updateFormData, resetFormData }}>
         {children}
      </InviteContext.Provider>
   );
};

export const useInvite = () => {
   const context = useContext(InviteContext);
   if (!context) throw new Error("useInvite must be used within an InviteProvider");
   return context;
};