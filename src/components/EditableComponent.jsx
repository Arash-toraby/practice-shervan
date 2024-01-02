import ButtonEdit from "../ui/ButtonEdit";
import { useRef, useEffect } from "react";

function EditableComponent({
  item,
  objName,
  handler,
  isEditing,
  handleEdit,
  editingField,
}) {
  const isCurrentlyEditing = isEditing && editingField === item;
  const inputRef = useRef(null);

  useEffect(() => {
    if (isCurrentlyEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCurrentlyEditing]);

  return isCurrentlyEditing ? (
    <li className="flex items-center justify-between border rounded-md ">
      <input
        ref={inputRef}
        placeholder={objName}
        value={objName}
        onChange={(e) => handler(e.target.value)}
      />
      <span>
        <ButtonEdit
          isEditingField={isCurrentlyEditing}
          onClick={() => handleEdit(isCurrentlyEditing ? null : item)}
        />
      </span>
    </li>
  ) : (
    <li className="flex items-center justify-between">
      {`${item}: ${objName}`}
      <span>
        <ButtonEdit
          isEditingField={isCurrentlyEditing}
          onClick={() => handleEdit(isCurrentlyEditing ? null : item)}
        />
      </span>
    </li>
  );
}

export default EditableComponent;
