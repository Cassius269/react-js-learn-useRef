import { useRef } from "react";

export default function ClickCount() {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`Vous avez cliqué ${ref.current} fois`);
  };

  return <button onClick={handleClick}>Click</button>;
}
