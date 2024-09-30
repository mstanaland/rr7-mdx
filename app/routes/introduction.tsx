import { Link, useLoaderData } from "react-router";
import { getPages } from "~/utils/get-pages";

export async function clientLoader() {
  const pages = await getPages();
  return pages;
}

export default function Introduction() {
  const pages = useLoaderData() as Awaited<ReturnType<typeof clientLoader>>;
  console.log(pages);

  return (
    <div>
      <div className="prose">
        <h1>Introduction</h1>
        <p>
          This file is a tsx file like we normally create. You can do any of the
          normal React things in here that you want
        </p>

        <p>These are some MDX files in this repo:</p>
      </div>

      <ul className="grid grid-cols-2 gap-5 mt-5">
        {pages.map((page) => (
          <li key={page.url} className="flex flex-col">
            <Link
              to={page.url}
              className="block p-5 bg-white border border-slate-400/20 rounded-md shadow flex-1"
            >
              <div className="font-semibold">{page.frontmatter.title}</div>
              <div className="text-sm text-slate-500">
                {page.frontmatter.description}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
