import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import BookDetails from "./components/bookDetails/BookDetails";
import Protected from "./routes/Protected";
import NotFound from "./routes/NotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protected isSignedIn={isLoggedIn} />,
      children: [
        {
          path: "/",
          element: <Dashboard onLogOut={logoutHandler} />,
        },
        { path: "/book/:id", element: <BookDetails /> },
      ],
    },
    {
      path: "/login",
      element: <Login onLogIn={loginHandler} />,
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
