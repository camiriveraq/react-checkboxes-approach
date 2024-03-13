import { TreeNode } from './types/types';
import { CheckboxTree } from './components/CheckBoxTree';
import { CheckboxProvider } from './reducer/provider';


function App() {
  const initialState: TreeNode[]  = [
    {
      id: '1',
      name: 'Raíz',
      isChecked: false,
      children: [
        {
          id: '1-1',
          name: 'Nodo 1-1',
          isChecked: false,
          children: [
            {
              id: '1-1-1',
              name: 'Nodo 1-1-1',
              isChecked: false,
            },
            {
              id: '1-1-2',
              name: 'Nodo 1-1-2',
              isChecked: false,
            },
          ],
        },
        {
          id: '1-2',
          name: 'Nodo 1-2',
          isChecked: false,
          children: [
            {
              id: '1-2-1',
              name: 'Nodo 1-2-1',
              isChecked: false,
            },
            {
              id: '1-2-2',
              name: 'Nodo 1-2-2',
              isChecked: false,
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Raíz 2',
      isChecked: false,
      children: [
        {
          id: '2-1',
          name: 'Nodo 2-1',
          isChecked: false,
          children: [
            {
              id: '2-1-1',
              name: 'Nodo 2-1-1',
              isChecked: false,
            },
            {
              id: '2-1-2',
              name: 'Nodo 2-1-2',
              isChecked: false,
            },
          ],
        },
      ],
    },
  ];
  
  return (
    <>
  <CheckboxProvider initialState={initialState}>
      <CheckboxTree />
    </CheckboxProvider>
    </>
  )
}  

export default App
