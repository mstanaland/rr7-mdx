import { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="not-prose text-black flex gap-4 items-center">
      <Button onPress={() => setCount(count + 1)}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
};
