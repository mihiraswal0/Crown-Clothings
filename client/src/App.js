import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { Outlet,RouterProvider,ScrollRestoration,createBrowserRouter} from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="font-bodyFont">
    <RouterProvider router={router} />
  </div>
  )
}