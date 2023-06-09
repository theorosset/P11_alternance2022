import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Apropos from "../Pages/apropos/Apropos";
import ArticlePage from "../Pages/article/ArticlePage";
import Page404 from "../Pages/page404/Page404";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/propos',
      element: <Apropos />,
    },
    {
      path: '/article/*',
      element: <ArticlePage />,
      errorElement: <Page404/>
    },
    {
      path: '/*',
      element: <Page404 />
    }
  ])
  
  export default router