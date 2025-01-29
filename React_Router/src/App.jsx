import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import About from "./component/About";
import User from "./component/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar /> <Login />{" "}
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },

    {
      path: "/user/:userName",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
