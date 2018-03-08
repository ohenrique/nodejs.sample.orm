/**
 * Method to migrate up.
 * 
 * @param {Knex} knex - Knex object.
 * 
 * @example used by a framework - dont use it directly
 */ 
module.exports.up = knex =>
  knex.schema.createTable('product', table => {
    table.increments('id')
      .primary()
      .comment('Unique identification')

    table.string('name')
      .notNullable()
      .comment('Name of the product')

    table.string('description')
      .notNullable()
      .comment('Description of the product')

    table
      .dateTime('created_at')
      .notNullable()
      .comment('Creation date of an product')

    table
      .dateTime('updated_at')
      .nullable()
      .comment('Update date of an product (if NULL was never updated)')
  })

/**
 * Method to migrate down.
 * 
 * @param {Knex} knex - Knex object.
 * 
 * @example used by a framework - dont use it directly
 */
module.exports.down = knex =>
  knex.schema.dropTable('product')