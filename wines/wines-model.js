const db = require("../data/config")

async function create(data) {
	const [id] = await db("wines").insert(data)
	return findById(id)
}

async function update(id, data) {
	return null
}

function remove(id) {
	
		return db("wines")
			.where("id")
			.del()
			
}

function find() {
	return db("wines")
}

function findById(id) {
	return db("wines")
		.where("id", id)
		.first()
}

module.exports = {
	create,
	update,
	remove,
	find,
	findById,
}