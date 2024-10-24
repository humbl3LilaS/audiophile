import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "headphones", element: <Headphones /> },
			{ path: "speakers", element: <Speakers /> },
			{ path: "earphones", element: <Earphones /> },
			{
				path: "products/details/:productId",
				element: <ProductDetails />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
