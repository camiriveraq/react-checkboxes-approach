import { ReactNode, useReducer } from "react";
import { CheckboxContext } from "../context/context";
import checkboxReducer  from "../context/context";
import { TreeNode } from "../types/types";

export const CheckboxProvider: React.FC<{ children: ReactNode; initialState: TreeNode[] }> = ({ children, initialState }) => {
    const [state, dispatch] = useReducer(checkboxReducer, initialState);
  
    return (
      <CheckboxContext.Provider value={{ state, dispatch }}>
        {children}
      </CheckboxContext.Provider>
    );
  };