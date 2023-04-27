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
        <form onSubmit={handleSave} className="border-2 rounded-2xl py-2.5 my-2">
            <input value={editToDo.item} onChange={handleChange} className="w-[670px] h-10 text-xl mr-1 ml-2"/>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-medium py-0.5 px-0.5 rounded">Save</button>
            <button type ="submit" onClick={handleCancel} className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-medium py-0.5 px-0.5 rounded ml-3">Cancel</button>
        </form>
    )
}