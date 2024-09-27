import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ArticleList from "./components/ArticleList.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/articles", element: <ArticleList /> },
      { path: "/articles/:articleId", element: <ArticleList /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
