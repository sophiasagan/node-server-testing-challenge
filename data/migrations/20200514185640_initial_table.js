exports.up = async function(knex) {
	await knex.schema.createTable("wines", (table) => {
		table.increments()
        table.text("name").notNullable()
        table.text('type').notNullable()
    
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("wines")
}
