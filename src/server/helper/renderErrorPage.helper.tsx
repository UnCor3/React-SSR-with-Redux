import { renderToString } from "react-dom/server";
import Error from "../pages/Error.tsx";

export default (errorMes: string) =>
  renderToString(
      <Error errorMes={errorMes} />
  );
