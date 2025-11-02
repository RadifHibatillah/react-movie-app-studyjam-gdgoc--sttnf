import { createBrowserRouter } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";
import { DefaultLayout } from "./layouts";
import { SomethingWrong } from "./components";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MoviePage />,
        errorElement: <SomethingWrong />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
