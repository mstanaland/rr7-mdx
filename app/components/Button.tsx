import * as React from "react";
import {
  type AriaButtonOptions,
  useButton,
  useFocusRing,
  mergeProps,
} from "react-aria";
import cx from "clsx";

interface ButtonProps extends AriaButtonOptions<"button"> {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const ref = React.useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={cx(
        "rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm border shadow-slate-500/20 border-slate-900/20  hover:bg-zinc-50 outline-none active:shadow-none",
        isFocusVisible && "ring-2 ring-offset-2 ring-blue-400"
      )}
    >
      {props.children}
    </button>
  );
}
