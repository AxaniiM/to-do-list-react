import { useState } from "react";

export function EditButton({id, content}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(content);
  


    function handleEditClick() {
        setIsEditing(true);

    }
    function handleCancelClick() {
        setIsEditing(false);
        setEditedContent(content);

    }
    function handleDoneClick() {
        setIsEditing(false);
        setEditedContent(editedContent);
    }

    function handleContentChange (event) {
        setEditedContent(event.target.value);
      };
      
    return (
        <>
        <li key={id}>
      {isEditing ? (
        <>
          <input type="text" value={editedContent} onChange={handleContentChange} />
          <button onClick={handleDoneClick}>Done</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <span>{content}</span>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </li>
        </>

    )
 
}