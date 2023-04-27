import { DeleteButton } from './Delete-Button';
import { EditToDo } from './Edit-component';
import { useState } from 'react';

export function Task({ item, onDelete, onSave, onEdit, onCancel }) {
    const [editing, setEditing] = useState(false);

  function handleDeleteClick () {
    onDelete(item.id);
  };
  function handleSaveClick (editedToDo) {
    setEditing(false)
    onSave(editedToDo)
  }
  function handleChangeClick() {
    setEditing(true)
    onEdit(item.id)
  }
  const handleCancel = () => {
    setEditing(false);
    onCancel()
  };

  return (
    <>
      {editing ? (
        <EditToDo todo={item} onSave={handleSaveClick} onCancel={handleCancel}/>
      ) : (
        <div className='w-[800px] my-2 border-2 rounded-2xl py-4'>
            <span className='float-left text-xl pl-2'>{item.item}</span>
          <div className=' float-right'>
            <button onClick={handleChangeClick} className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-medium py-0.5 px-1 rounded mr-3 ml-3">Edit</button>
            <DeleteButton onClick={handleDeleteClick}/>
          </div>
        </div>
      )}
    </>
  );
};
