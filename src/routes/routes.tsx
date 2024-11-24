import { createBrowserRouter } from "react-router-dom"
import NotFoundPage from "@pages/NotFoundPage"
import Layout from "@layout/layout"
import App from "../App"

export const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "",
          element: <App />
        },
        {
          path: "/shop",
          element: <></>
        },
        {
          path: "/our-story",
          element: <></>
        },
        {
          path: "/blog",
          element: <></>
        },
        {
          path: "/contact-us",
          element: <></>
        }
      ]
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  }
)
