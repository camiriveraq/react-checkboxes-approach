import { useContext } from "react";
import { CheckboxContext } from "../context/context";

export const useCheckboxTree = () => {
    const context = useContext(CheckboxContext);
    if (context === undefined) {
      throw new Error('useCheckboxTree must be used within a CheckboxProvider');
    }
    return context;
  };
  