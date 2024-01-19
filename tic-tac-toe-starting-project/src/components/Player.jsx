import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [editedname, seteditedname] = useState(name);
  const [isEditing, setIsediting] = useState(false);
  const clickHandler = () => {
    setIsediting((editing) => !editing);
  };
  const changeHandler = (event) => {
    seteditedname(event.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {!isEditing && <span className="player-name">{editedname}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={editedname}
            onChange={changeHandler}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={clickHandler}>
        {!isEditing && "Edit"} {isEditing && "Save"}{" "}
      </button>
    </li>
  );
}
