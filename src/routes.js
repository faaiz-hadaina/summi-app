import { createBrowserRouter } from "react-router-dom";
import AddContact from "./views/AddContact";
import EditContact from "./views/EditContact";
import { ErrorPage } from "./views/ErrorPage";
import Home from "./views/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "addcontact",
    element: <AddContact />
  },
  {
    path: "editcontact",
    element: <EditContact />
  }
]);
