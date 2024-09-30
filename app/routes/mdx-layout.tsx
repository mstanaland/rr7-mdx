import { Outlet } from "react-router";

export default function MdxLayout() {
  return (
    <div className="prose prose-slate max-w-screen-md">
      <Outlet />
    </div>
  );
}
