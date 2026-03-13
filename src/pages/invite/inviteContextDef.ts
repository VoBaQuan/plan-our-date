import { createContext } from "react";
import type { Date } from "./components/Step3";
import type { Food } from "./components/Step4";
import type { Activity } from "./components/Step5";

export interface InviteData {
   selectedDate?: Date;
   selectedFood?: Food;
   selectedActivity?: Activity;
   excitementLevel?: number;
   message?: string;
}

export interface InviteContextType {
   formData: InviteData;
   updateFormData: (newData: Partial<InviteData>) => void;
   resetFormData: () => void;
}

export const InviteContext = createContext<InviteContextType | undefined>(undefined);
