import { FC, useState, useEffect, useRef, ReactNode } from "react";

const WebDev: FC = () => {
  const [name, setName] = useState<any>("");
  const inputRef = useRef<any>(null);
  const prevName = useRef<any>(null);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    console.log(inputRef.current);
  }
  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>
        My name is {name} but it used to be {prevName.current}
      </h1>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default WebDev;
