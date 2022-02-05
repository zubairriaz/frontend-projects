import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";
export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResole', args);
        return { path: args.path, namespace: 'a' };
      });
 
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);
 
        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              import message from './message';
              console.log(message);
            `,
          };
        } else {
          return {
            loader: 'jsx',
            contents: 'export default "hi there!"',
          };
        }
      });
    },
  };
};

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
      plugins:[unpkgPathPlugin()],
      entryPoints:['index.js'],
      bundle:true,
      write:false
    });
    // const { code } = result;
    // setOutput(code);
    console.log(result);
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
