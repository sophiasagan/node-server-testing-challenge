exports.seed = async function(knex) {
	await knex("wines").truncate()
	await knex("wines").insert([
		{ name: "prosecco", type: "sparkling" },
		{ name: "pinot gris", type: "white" },
		{ name: "syrah", type: "rosé" },
    { name: "merlot", type: "red" },
    { name: "riesling", type: "dessert"},
	])
}