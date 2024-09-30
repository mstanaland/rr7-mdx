export type Frontmatter = {
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
};

export type PageMeta = {
  url: string;
  frontmatter: Frontmatter;
};

export const getPages = async (): Promise<PageMeta[]> => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../mdx/*.mdx",
    { eager: true }
  );

  const pages = Object.entries(modules).map(([file, post]) => {
    const url = file.replace("../mdx", "").replace(/\.mdx$/, "");

    return {
      url,
      frontmatter: post.frontmatter,
    };
  });
  return sortBy(pages, (page) => page.frontmatter.published, "desc");
};

function sortBy<T>(
  arr: T[],
  key: (item: T) => any,
  dir: "asc" | "desc" = "asc"
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}