import { Navigate, Outlet} from "react-router";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import AdminLayout from "../components/Layout/AdminLayout";
import RequestPage from "../pages/Admin/RequestPage";
import ReturnPage from "../pages/Admin/ReturnPage";
import EquipmentPage from "../pages/Admin/EquipmentPage";
import StudentPage from "../pages/Admin/StudentPage";
import ActionHistoryPage from "../pages/Admin/ActionHistoryPage";
import BorrowPage from "../pages/Admin/BorrowPage";
import ReturnedPage from "../pages/Admin/ReturnedPage";

const routes = [
	{
		path: "/*",
		element: <PageNotFound />,
	},
	{
		path: "/",
		element: <Navigate to="/login" />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/admin",
		element: <AdminLayout />,
		children: [
			{
				path: "request",
				element: <RequestPage />,
			},
			{
				path: "borrow",
				element: <BorrowPage />,
			},
			{
				path: "return",
				element:<Outlet />,
				children: [
					{
						index: true,
						element: <ReturnPage />,
					},
					{
						path: "returned",
						element: <ReturnedPage />,
					},
				],
			},
			{
				path: "equipment",
				element: <EquipmentPage />,
			},
			{
				path: "student",
				element:<StudentPage />,
			},
			{
				path: "actionHistory",
				element:<ActionHistoryPage />,
			},
		]
	}
];

export default routes;