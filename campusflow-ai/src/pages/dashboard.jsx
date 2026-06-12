import Sidebar from "../components/Sidebar";
import StatCard from "../components/Statcard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <Navbar />

        <div className="grid grid-cols-3 gap-6">
          <StatCard title="Attendance" value="85%" />
          <StatCard title="Assignments" value="3" />
          <StatCard title="Upcoming Exams" value="2" />
        </div>
      </div>
    </div>
  );
}