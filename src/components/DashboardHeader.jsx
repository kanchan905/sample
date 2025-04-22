function DashboardHeader() {
    return (
      <div className="flex items-center justify-between p-4 bg-white shadow mb-6 rounded">
        <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>
        <div className="flex gap-2">
          <input type="text" placeholder="Search anything…" className="border rounded p-2" />
          <button className="border p-2 rounded bg-blue-600 text-white">Add Widget</button>
          <select className="border p-2 rounded">
            <option>Last 2 days</option>
            <option>Last week</option>
            <option>Last month</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default DashboardHeader;
  