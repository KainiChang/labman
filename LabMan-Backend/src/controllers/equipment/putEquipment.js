import pool from "../../utils/MySQL/db.js";

function editEquipment(req, res) {
	const { type_id } = req.params;
	const { type_name, total_amount, available_amount } = req.body;

	const query = "UPDATE equipment_type SET type_name = ?, total_amount = ?, available_amount = ? WHERE type_id = ?";
	const params = [type_name, total_amount, available_amount, type_id];

	pool.query(query, params, (err, results) => {
		if (err) {
			return res.status(500).json({ error: "Error editing equipment" });
		}
		if (results.affectedRows === 0) {
			return res.status(404).json({ error: "Equipment not found" });
		}
		return res.status(200).json({ message: "Equipment edited successfully" });
	});
}

export { editEquipment };