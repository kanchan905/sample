function AddWidgetButton({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded text-blue-600 cursor-pointer hover:border-blue-400"
      >
        + Add Widget
      </div>
    );
  }
  
  export default AddWidgetButton;

  