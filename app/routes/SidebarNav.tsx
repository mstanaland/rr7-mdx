import { NavLink } from "react-router";
import cx from "clsx";

export function SidebarNav() {
  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul>
        <li className="relative mt-8">
          <h2 className="text-xs font-semibold text-slate-900">Guides</h2>
          <ul className="mt-3">
            <li className="relative">
              <SidebarLink to="/">Introduction</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/mdx-sample">Markdown and MDX</SidebarLink>
            </li>
          </ul>
        </li>

        <li className="relative mt-8">
          <h2 className="text-xs font-semibold text-slate-900">Components</h2>
          <ul className="mt-3">
            <li className="relative">
              <SidebarLink to="/button">Button</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
          </ul>
        </li>

        <li className="relative mt-8">
          <h2 className="text-xs font-semibold text-slate-900">
            Section Heading
          </h2>
          <ul className="mt-3">
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
            <li className="relative">
              <SidebarLink to="/foo">Another Link</SidebarLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function SidebarLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return cx(
          "flex justify-between gap-2 py-2 px-3 -ml-3 text-sm transition rounded-md",
          isActive
            ? "text-slate-900 font-semibold bg-slate-100 "
            : "text-slate-600 hover:text-slate-900"
        );
      }}
    >
      <span className="truncate">{children}</span>
    </NavLink>
  );
}
