
export function DeleteButton({onClick}) {
    const handleClick = () => {
        onClick();
      };

    return <button className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-medium py-0.5 px-0.5 rounded mr-2" onClick={handleClick}>Delete</button>;
}