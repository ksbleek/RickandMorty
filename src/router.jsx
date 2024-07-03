import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Characters from "./pages/characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "characters/",
        element: <Characters />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
