import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import loader from "./assets/loader.gif";
import { routes } from "./routes";

function App() {
  const error = useSelector((state) => state?.loadingReducer?.message || "");
  const loading = useSelector(
    (state) => state?.loadingReducer?.loading || false
  );

  return (
    <>
      {error.length > 1 && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
      {loading && (
        <img
          alt="an img"
          src={loader}
          style={{
            display: "block",
            margin: "auto",
            objectFit: "cover",
            width: 100,
            height: 100
          }}
        />
      )}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
