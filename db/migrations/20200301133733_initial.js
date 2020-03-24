
exports.up = async function(knex) {
  await knex.schema.createTable('items', items => {
    items.increments();

    items
      .string('desc', 255)
      .notNullable()
    items
      .string('category', 255)
      .notNullable()
    items
      .string('expiry', 255)
      .notNullable()
    items
      .string('signature', 255)
      .notNullable()
    items
      .string('effects', 255)
      .notNullable()

  });

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('items');
};
