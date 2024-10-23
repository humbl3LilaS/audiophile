import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Headphones from "./pages/Headphones";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "headphones", element: <Headphones /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
