import { Link, Outlet } from "react-router";

export default function TestLayout() {
  return (
    <div className="px-10 prose">
      <header className="flex gap-4 items-center py-4 border-b-1">
        <div className="text-xl font-bold">Testing</div>
        <Link to="/">Home</Link>
      </header>

      <Outlet />
    </div>
  );
}
