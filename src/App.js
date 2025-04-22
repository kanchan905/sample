import { useSelector } from "react-redux";
import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import CategorySection from "./components/CategorySection";
import WidgetSidebar from "./components/WidgetSidebar";

function App() {
  const categories = useSelector(state => state.dashboard.categories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <DashboardHeader />
      {categories.map(category => (
        <CategorySection
          key={category.id}
          category={category}
          onOpenSidebar={() => setIsSidebarOpen(true)}
        />
      ))}
      <WidgetSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}

export default App;
