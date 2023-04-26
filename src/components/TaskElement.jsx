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
    <div>
      {editing ? (
        <EditToDo todo={item} onSave={handleSaveClick} onCancel={handleCancel}/>
      ) : (
        <>
          <span>{item.item}</span>
          <button onClick={handleChangeClick}>Edit</button>
          <DeleteButton onClick={handleDeleteClick} />
        </>
      )}
    </div>
  );
};
