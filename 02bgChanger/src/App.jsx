import { useState } from "react";

function App() {
  const [color, setColor] = useState("#aaa");

  return (
    // <div
    //   className="w-full h-screen duration-200"
    //   style={{ backgroundColor: color }}
    // >
    //   <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0">
    //     <div className="flex flex-wrap justify-center gap-3 rounded-full shadow-xl bg-white  px-3 py-2">
    //       <button
    //         onClick={() => setColor("red")}
    //         className=" px-3 py-2 rounded-full outline-none sh"
    //         style={{ backgroundColor: "red" }}
    //       >
    //         red
    //       </button>
    //       <button
    //         onClick={() => setColor("blue")}
    //         className=" px-3 py-2 rounded-full outline-none sh"
    //         style={{ backgroundColor: "blue" }}
    //       >
    //         blue
    //       </button>
    //       <button
    //         onClick={() => setColor("green")}
    //         className=" px-3 py-2 rounded-full outline-none sh"
    //         style={{ backgroundColor: "green" }}
    //       >
    //         green
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center flex-wrap ">
        <div className="bg-white shadow-2xl flex justify-center flex-wrap rounded-3xl px-3 py-2 gap-3">
          <button onClick={()=>setColor("red")}
          style={{backgroundColor:"red"}}
          className=" px-3 py-2 outline-none rounded-full"
          >red</button>
           <button onClick={()=>setColor("blue")}
          style={{backgroundColor:"blue"}}
          className=" px-3 py-2 outline-none rounded-full"
          >blue</button>
           <button onClick={()=>setColor("green")}
          style={{backgroundColor:"green"}}
          className=" px-3 py-2 outline-none rounded-full"
          >green</button>
        </div>
      </div>
    </div>
  );
}

export default App;
