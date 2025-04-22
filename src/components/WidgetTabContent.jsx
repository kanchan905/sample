import { useState, useEffect } from "react";

function WidgetTabContent({ category, onAdd, onRemove, onToggleVisibility }) {
  const [checkedWidgets, setCheckedWidgets] = useState({});

  useEffect(() => {
    // Initialize all widgets as checked by default
    const initialCheckedState = category.widgets.reduce((acc, widget) => {
      acc[widget.id] = true;
      return acc;
    }, {});
    setCheckedWidgets(initialCheckedState);
  }, [category.widgets]);

  const handleCheckboxChange = (widgetId, isChecked) => {
    setCheckedWidgets((prev) => ({
      ...prev,
      [widgetId]: isChecked,
    }));

    if(!isChecked) {
      onRemove(category.id, widgetId);
    }
  };

  return (
    <div>
      <button
        onClick={onAdd}
        className="mb-4 px-3 py-2 bg-blue-600 text-white rounded text-sm"
      >
        + Add Widget
      </button>
      <ul>
        {category.widgets.map((widget) => (
          <li
            key={widget.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{widget.title}</span>
            <input
              type="checkbox"
              checked={!!checkedWidgets[widget.id]}
              onChange={(e) =>
                handleCheckboxChange(widget.id, e.target.checked)
              }
              className="ml-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetTabContent;