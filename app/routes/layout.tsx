import { type MetaFunction, Outlet, Link } from "react-router";
import { SidebarNav } from "./SidebarNav";

export const meta: MetaFunction = () => {
  return [
    { title: "RR7 MDX" },
    { name: "description", content: "Testing out React Router 7 and mdx" },
  ];
};

export default function Layout() {
  return (
    <div className="w-full">
      <div className="h-full lg:ml-72 xl:ml-80">
        <header className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-slate-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80">
            <div className="hidden lg:flex">
              <Link to="/" className="text-xl font-extrabold">
                MDXDocs
              </Link>
            </div>
            <div className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-lg bg-white/85 ">
              <div className="hidden lg:block lg:max-w-sm lg:flex-auto">
                <button className="hidden h-8 w-full items-center gap-2 rounded bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-slate-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none lg:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20">
                  Search ...
                  <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
                    <kbd className="font-sans">⌘</kbd>
                    <kbd className="font-sans">K</kbd>
                  </kbd>
                </button>
              </div>
              <div className="absolute inset-x-0 top-full h-px transition bg-slate-500/20 dark:bg-white/7.5" />
            </div>

            <SidebarNav />
          </div>
        </header>

        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">
            <article className="flex h-full flex-col pb-10 pt-16">
              <Outlet />
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
