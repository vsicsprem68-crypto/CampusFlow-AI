export default function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
      <h3 className="text-slate-400">{title}</h3>
      <h1 className="text-3xl font-bold mt-2">{value}</h1>
    </div>
  );
}