import { useState } from "react";

export const EditToDo = ({todo, onSave, onCancel}) => {
    const [editToDo, setEditToDo] = useState({...todo});

    const handleSave = (e) => {
        e.preventDefault()
        onSave(editToDo);
    };

    const handleChange = (e) => {
        setEditToDo({
            ...editToDo,
            item: e.target.value
        });
    };
    const handleCancel = () => {
        onCancel()
    }

    return (
        <form onSubmit={handleSave}>
            <input value={todo.task} placeholder={todo.task} onChange={handleChange} />
            <button type="submit">Save</button>
            <button type ="submit" onClick={handleCancel}>Cancel</button>
        </form>
    )
}