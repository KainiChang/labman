import { Table } from "antd";
import { useEffect } from "react";
import { useEquipmentContext } from "../../Context";

const columns = [
	{
		title: "Equipment Type",
		dataIndex: "equipmentType",
	},
	{
		title: "Available Count",
		dataIndex: "availableCount",
	},
	{
		title: "Total Count",
		dataIndex: "count",
	},

];

const EquipmentTable = () => {
	const { data, loading, fetchData, tableParams, onTableChange, onRowSelected } = useEquipmentContext();

	useEffect(() => {
		fetchData();
	}, [JSON.stringify(tableParams)]);

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
			onRowSelected(selectedRows[0]);//modify this line so we could set row as some identifier
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === "Disabled User",
			// Column configuration not to be checked
			name: record.name,
		}),
	};

	return (
		<Table
			columns={columns}
			rowKey={(record) => record.equipmentType}
			rowSelection={{
				type: "radio",
				...rowSelection,
			}}
			dataSource={data}
			pagination={tableParams.pagination}
			loading={loading}
			onChange={onTableChange}
			scroll={{ x: "max-content" }}
		/>
	);
};

export default EquipmentTable;