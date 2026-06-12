export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold mb-8">🚀 CampusFlow</h1>

      <div className="space-y-4">
        <p>Dashboard</p>
        <p>Attendance</p>
        <p>Assignments</p>
        <p>Notes AI</p>
        <p>Placement Roadmap</p>
        <p>AI Mentor</p>
      </div>
    </div>
  );
}