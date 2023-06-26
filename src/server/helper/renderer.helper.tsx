import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../../client/App.tsx";
import { Store } from "redux";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

//*our renderer here
export default (store: Store, requestPath: string) => {
  const content = renderToString(
    <StaticRouter location={requestPath}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

    const helmet = Helmet.renderStatic()
        
    //script tag to do hydration added to sent html
    //<script src="bundle.js"></script>

  return `
    <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.__INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
