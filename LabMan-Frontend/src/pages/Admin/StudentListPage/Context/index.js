import { useContext,createContext, useState} from "react";

const StudentListContext = createContext();

export const useStudentListContext = () => {
	return useContext(StudentListContext);
};

const StudentListProvider = ({ children, course_id }) => {
	const [data, setData] = useState([
		{
			student_id: "a111111111",
		},
	]);
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
			showSizeChanger: true,
			pageSizeOptions: ["5", "10", "20", "50"],
			total: 0,
		},
	});

	const fetchData = async () => {
		setLoading(true);
		console.log("course_id:", course_id);
		setLoading(false);
	};

	const onSearch = async (value) => {
		setLoading(true);
		console.log("course_id:", course_id);
		console.log("search:", value);
		setData([]);
		setLoading(false);
	};

	return (
		<StudentListContext.Provider value={
			{
				data,
				fetchData,
				loading,
				tableParams,
				setTableParams,
				onSearch,
			}
		}>
			{children}
		</StudentListContext.Provider>
	);
};

export default StudentListProvider;