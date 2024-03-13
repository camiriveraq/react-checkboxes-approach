export interface TreeNode {
    id: string;
    name: string;
    isChecked: boolean;
    children?: TreeNode[];
  }
  
  export type TreeState = TreeNode[];
  
  export interface Action {
    type: 'TOGGLE_CHECKBOX' | 'CHECK_ALL_CHILDREN';
    payload: {
      id: string;
      isChecked?: boolean;
    };
  }
  