export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome Prem 👋</h1>
        <p className="text-slate-400">
          Manage your campus life smarter with AI
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700">
          AI Mentor
        </button>

        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
          P
        </div>
      </div>
    </div>
  );
}   