import path from 'node:path';
import { fileURLToPath } from 'node:url';
import webpackNodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  target: "node",
  mode: "development",
  entry: path.join(__dirname,'src/server/index.tsx'),
  output: {
    path: path.join(__dirname,'src/dist'),
    filename: "bundle.cjs",
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets :[
              "@babel/preset-env",
              ["@babel/preset-react" ,{ runtime : "automatic"}]
            ]
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets :[
              "@babel/preset-env",
              ["@babel/preset-react" ,{ runtime : "automatic"}]
            ]
          },
        },
      }, {
        test: /\.ts$/,
        use: {
            loader: "babel-loader",
            options: {
              presets :[
                "@babel/preset-env",
                ["@babel/preset-react" ,{ runtime : "automatic"}],
                "@babel/preset-typescript"
              ]
            },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx$/,
        use: {
            loader: "babel-loader",
            options: {
              presets :[
                "@babel/preset-env",
                ["@babel/preset-react" ,{ runtime : "automatic"}],
                "@babel/preset-typescript"
              ]
            },
        },
        exclude: /node_modules/,
      },
    ],
  },
};