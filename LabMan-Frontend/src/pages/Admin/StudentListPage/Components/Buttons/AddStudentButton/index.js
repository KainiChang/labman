import { Button, Modal, Form } from "antd";
import AddStudentForm from "../../Forms/AddStudentForm";
import { useState } from "react";
import { useStudentListContext } from "../../../Context";

const AddStudentButton = () => {
	const [form] = Form.useForm();
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const {onAdd}=useStudentListContext();
	const onClick = () => {
		setOpen(true);
	};
	const hideModal = () => {
		form.resetFields();
		setOpen(false);
	};

	const handleOk = async () =>{
		const data=await form.validateFields();
		console.log( "form submitting", data);
		setConfirmLoading(true);
		await onAdd(data);
		setConfirmLoading(false);
		hideModal();
	};

	return (
		<>
			<Button type="primary" onClick={onClick}>
                Add
			</Button>
			<Modal 
				title={"Add Student"}
				destroyOnClose={true}
				open={open}
				onOk={handleOk}
				onCancel={hideModal}
				confirmLoading={confirmLoading}
			>
				<AddStudentForm form={form}/>
			</Modal>
		</>
	);
};

export default AddStudentButton;