
export function DeleteButton({onClick}) {
    const handleClick = () => {
        onClick();
      };

    return <button className="" onClick={handleClick}>Delete</button>;
}