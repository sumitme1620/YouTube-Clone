import Body from "./components/Body";
import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
