import * as esbuild from "esbuild-wasm";
import axios from "axios";
import localForage from "localforage";

const store = localForage.createInstance({
  name: "cacheModules",
  storeName: "Cache",
  description: "a store to cache the modules data",
});

export const unpkgPathPlugin = (input: string) => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /(^index\.js$)/ }, (args: any) => {
        return {
          path: args.path,
          namespace: "a",
        };
      });
      build.onResolve({ filter: /\.+\// }, (args: any) => {
        return {
          path: new URL(args.path, "https://unpkg.com" + args.resolveDir + "/")
            .href,
          namespace: "a",
        };
      });
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: input,
          };
        }

        const cacheResult: esbuild.OnLoadResult | null = await store.getItem(
          args.path
        );
        if (cacheResult) {
          return cacheResult;
        }

        const { data, request } = await axios.get(args.path);
        const fileType = args.path.match(/.css$/) ? "css" : "jsx";
        const escaped = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");
        const contents =
          fileType === "css"
            ? `const style = document.createElement('style');
           style.innerText = '${escaped}';
           document.head.appendChild(style);
          `
            : data;
        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await store.setItem(args.path, result);
        return result;
      });
    },
  };
};
