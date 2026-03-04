import { useRef } from "react";

export default function ClickCount() {
  const buttonRef = useRef(null);
  console.log(buttonRef.current);

  buttonRef.current.innerText = 'Enregistrer';

  return <button ref={buttonRef}>Click</button>;
}
