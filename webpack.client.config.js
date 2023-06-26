import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: path.join(__dirname,"src/client/main.tsx"),
    output: {
      path: path.join(__dirname, "src/public"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.js$/,
          use: {
              loader: "babel-loader",
              options: {
                presets :[
                  "@babel/preset-env",
                  ["@babel/preset-react" ,{ runtime : "automatic"}]
                ]
              },
          },
          exclude: /node_modules/,
        },
         {
          test: /\.jsx$/,
          use: {
              loader: "babel-loader",
              options: {
                presets :[
                  "@babel/preset-env",
                  ["@babel/preset-react" ,{ runtime : "automatic"}]
                ]
              },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
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