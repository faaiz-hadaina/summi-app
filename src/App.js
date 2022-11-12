import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { routes } from "./routes";

function App() {
  const error = useSelector((state) => state?.loadingReducer?.message || "");

  return (
    <>
      {error.length > 1 && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}

      <RouterProvider router={routes} />
    </>
  );
}

export default App;
