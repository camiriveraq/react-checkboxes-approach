import React from 'react';
import { useCheckboxTree } from "../hooks/useCheckboxTree";
import { TreeNode } from '../types/types';

export const CheckboxTree: React.FC = () => {
    const { state: nodes, dispatch } = useCheckboxTree(); // Usar el estado directamente del contexto
  
    const handleCheckboxChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const isChecked = e.target.checked;
        dispatch({ type: 'TOGGLE_CHECKBOX', payload: { id, isChecked } });
    };

    console.log(nodes);
  
    const renderTree = (nodes: TreeNode[]) => (
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            <input
              type="checkbox"
              checked={node.isChecked}
              onChange={(e) => handleCheckboxChange(node.id, e)}
            />
            {node.name}
            {node.children && <ul>{renderTree(node.children)}</ul>}
          </li>
        ))}
      </ul>
    );
  
    return <>{renderTree(nodes)}</>;
};
