import { useSelector, useDispatch } from "react-redux";
import { addWidget, removeWidget } from "../features/dashboardSlice";
import { useState } from "react";
import WidgetTabContent from "./WidgetTabContent";

function WidgetSidebar({ isOpen, onClose }) {
  const categories = useSelector(state => state.dashboard.categories);
  const [activeTab, setActiveTab] = useState(categories[0]?.id);
  const dispatch = useDispatch();

  const handleAddWidget = (categoryId) => {
    const title = prompt("Enter new widget title:");
    if (title) {
      const widget = { id: Date.now().toString(), title, value: "New data" };
      dispatch(addWidget({ categoryId, widget }));
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }));
  };


  return (
    <div
      className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Manage Widgets</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">✖</button>
      </div>
      <div className="flex border-b">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex-1 p-2 text-sm font-medium ${
              activeTab === cat.id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-128px)]">
        {categories.map(cat =>
          cat.id === activeTab ? (
            <WidgetTabContent
              key={cat.id}
              category={cat}
              onAdd={() => handleAddWidget(cat.id)}
              onRemove={handleRemoveWidget}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default WidgetSidebar;
