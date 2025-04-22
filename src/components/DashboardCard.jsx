import {
  PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, ResponsiveContainer,
} from 'recharts';

const pieData = [
  { name: 'Failed', value: 1989 },
  { name: 'Warning', value: 681 },
  { name: 'Not Notable', value: 80 },
  { name: 'Passed', value: 3219 }
];

const barData = [
  { name: 'Critical', value: 82 },
  { name: 'High', value: 12 },
  { name: 'Medium', value: 30 },
  { name: 'Low', value: 6 }
];

const COLORS = ['#EF4444', '#F59E0B', '#9CA3AF', '#10B981'];

const RiskAssessmentChart = ({ title }) => (
  <>
  
  <div className="bg-white rounded-lg shadow p-4 h-64 flex">
    <PieChart width={240} height={200}>
      <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} innerRadius={30} dataKey="value" label>
        {pieData.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    {/* Data Section */}
    <div className="w-1/2 flex flex-col justify-center">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="text-sm">
        {pieData.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  </>
);

const ImageSecurityBar = ({ title }) => (
  <div className="bg-white rounded-lg shadow p-4 h-64">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height={120}>
      <BarChart data={barData}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value">
          {barData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const EmptyWidget = ({ title }) => (
  <div className="bg-white rounded-lg shadow p-4 h-64 flex items-center justify-center text-gray-400">
    <span>{title} – No Graph data</span>
  </div>
);

const DashboardCard = ({ widget }) => {
  switch (widget.type) {
    case 'donut':
      return <RiskAssessmentChart title={widget.title} />;
    case 'bar':
      return <ImageSecurityBar title={widget.title} />;
    case 'radial':
      return <EmptyWidget title={widget.title} />;
    default:
      return <EmptyWidget title={widget.title} />;
  }
};

export default DashboardCard;
