
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";
import {unpkgPathPlugin} from './plugin/unpkgPathPlugin'



const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const ref = useRef<boolean | null>(null);

  const startService = async () => {
    const service = await esbuild.initialize({
      wasmURL: "/esbuild.wasm",
      worker: false,
    });
    ref.current = true;
    console.log(service);
  };

  useEffect(() => {
    startService();
  }, []);

  const onSubmit = async () => {
    if (!ref.current) {
      return;
    }
    const result = await esbuild.build({
      plugins:[unpkgPathPlugin(input)],
      entryPoints:['index.js'],
      bundle:true,
      write:false,
      define:{
        'process.env.NODE_ENV':'"production"',
        'global':'window'
      }
    });
    // const { code } = result;
    // setOutput(code);
    const {outputFiles} = result;
    setOutput(outputFiles[0].text)
  };
  return (
    <div className="App">
      <textarea
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></textarea>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
      <pre>{output}</pre>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
