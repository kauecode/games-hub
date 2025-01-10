import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage/>},
      { path: 'about', element: <AboutPage />},
      { path: "game/:slug", element:  <GameDetailPage/> }     
    ]
  }
]);

export default router;