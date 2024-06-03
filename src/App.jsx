import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import BookDetails from "./components/bookDetails/BookDetails";
import Protected from "./routes/Protected";
import NotFound from "./routes/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protected />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        { path: "/book/:id", element: <BookDetails /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
