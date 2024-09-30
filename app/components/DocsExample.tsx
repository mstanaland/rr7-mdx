import * as React from "react";

interface DocsExampleProps {
  children: React.ReactNode;
}

export function DocsExample({ children }: DocsExampleProps) {
  return <div className="not-prose rounded-lg bg-slate-50 p-1">{children}</div>;
}

interface DocsCodeProps {
  children: React.ReactNode;
}

export function DocsCode({ children }: DocsCodeProps) {
  return (
    <div className="not-prose p-5 text-sm overflow-x-auto bg-slate-50">
      {children}
    </div>
  );
}

export function DocsResult({ children }: DocsCodeProps) {
  return (
    <div className="not-prose bg-white rounded-lg m-1 p-5 shadow shadow-slate-500/10">
      {children}
    </div>
  );
}
