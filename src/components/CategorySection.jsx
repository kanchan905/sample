import DashboardCard from './DashboardCard';
import AddWidgetButton from './AddWidgetButton';

function CategorySection({ category, onOpenSidebar }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <DashboardCard key={widget.id} widget={widget} />
        ))}
        <AddWidgetButton onClick={onOpenSidebar} />
      </div>
    </div>
  );
}

export default CategorySection;
