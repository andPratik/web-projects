import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charectorAllowed, setcharectorAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  //useref  hook
  const passwordRef = useRef(null);
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDFGHIHJKLMNOPQUVWXYZabcdefghijklmnopquvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charectorAllowed) str += "!@#$%^&*()_+{}|?><~[]./,";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charectorAllowed, setPassword]);

  const copyPassToClipborad = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, charectorAllowed, numberAllowed, PasswordGenerator]);

  return (
    <div className="bg-gray-800  m-2 m p-8 text-orange-400 flex  flex-col  items-center gap-6 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3">
      <div className=" text-white text-2xl">Password Generator</div>
      <div className="">
        <input
          className=" px-2 py-1 rounded-l-full  overflow-hidden shadow outline-none"
          type="text"
          value={Password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="px-2 py-1 rounded-r-full bg-blue-600"
          onClick={copyPassToClipborad}
        >
          copy
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <input
          className="text-black "
          type="range"
          defaultValue={8}
          min={8}
          max={20}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>length: {length}</label>
        <input
          type="checkbox"
          defaultChecked={charectorAllowed}
          onClick={() => {
            setnumberAllowed((prev) => !prev);
          }}
        />
        <label>number</label>
        <input
          type="checkbox"
          defaultChecked={charectorAllowed}
          onClick={() => {
            setcharectorAllowed((prev) => !prev);
          }}
        />
        <label>charector</label>
      </div>
    </div>
  );
}

export default App;
