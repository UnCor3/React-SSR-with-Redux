import renderErrorPage from "./helper/renderErrorPage.helper.tsx";
import createStore from "./helper/createStore.helper.ts";
import renderer from './helper/renderer.helper.tsx';
import { routes } from "../shared/routes.tsx";
import express from "express";

const app = express();
const PORT = 3000;
 
//*serving a public folder 
app.use(express.static("src/public")); 
       
//*matching all routes     
app.get("*", async (req, res) => {
  try {  
    const matchedRoute = routes.find((route) => route.path === req.path)
    const store = createStore()
    
    if (matchedRoute?.loader) {
      const promise = matchedRoute?.loader(store) as Promise<any> | Promise<any>[]
      if (Array.isArray(promise)) await Promise.all(promise)
      else await promise;
    }
    const reactApp = renderer(store,req.path);
    res.send(reactApp) 
  } catch (error) {
    const errorPage = renderErrorPage('Something went wrong')
    res.send(errorPage)
  }   
});    
 
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
 