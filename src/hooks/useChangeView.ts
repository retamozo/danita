import { Step } from "@/types";
import { useState } from "react";

export const useChangeView = () => {
    const [currentStep, setCurrentStep] = useState<Step>("initial");
    const goToView = (view: Step) => setCurrentStep(view)

    return {
        goToView,
    }
}