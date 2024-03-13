import React, { createContext } from 'react';

interface TreeNode {
  id: string;
  name: string;
  isChecked: boolean;
  children?: TreeNode[];
}

type Action =
  | { type: 'TOGGLE_CHECKBOX'; payload: { id: string; isChecked: boolean } }
  | { type: 'TOGGLE_CHILDREN_CHECKBOXES'; payload: { id: string; isChecked: boolean } };

type State = TreeNode[];

export const CheckboxContext = createContext<{
  state: TreeNode[];
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const checkboxReducer = (state: State, action: Action): State => {

  const updateNodes = (nodes: TreeNode[], id: string, isChecked: boolean): TreeNode[] => {
    let allChecked = true;
  
    const updateChildNodes = (nodes: TreeNode[], isChecked: boolean): TreeNode[] => {
      return nodes.map(node => ({
        ...node,
        isChecked,
        children: node.children ? updateChildNodes(node.children, isChecked) : undefined,
      }));
    };
  
    const nodesUpdated = nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          isChecked,
          children: node.children ? updateChildNodes(node.children, isChecked) : undefined,
        };
      } else if (node.children) {
        const updatedChildren = updateNodes(node.children, id, isChecked);
        const childrenChecked = updatedChildren.every(child => child.isChecked);
        allChecked = allChecked && childrenChecked;
  
        return {
          ...node,
          isChecked: node.children.length === 0 ? node.isChecked : childrenChecked,
          children: updatedChildren,
        };
      }
      allChecked = allChecked && node.isChecked;
      return node;
    });
  
    // Esta parte es para asegurarse de que, si todos los hermanos están seleccionados, el padre también se seleccione.
    // La lógica específica dependerá de cómo manejes la estructura del árbol y puede necesitar ajustes.
  
    return nodesUpdated.map(node => ({
      ...node,
      isChecked: node.children?.length ? allChecked && node.children.every(child => child.isChecked) : node.isChecked,
    }));
  };
  


  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      return updateNodes(state, action.payload.id, action.payload.isChecked);
    default:
      return state;
  }
};

export default checkboxReducer;
