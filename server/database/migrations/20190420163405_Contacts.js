exports.up = function(knex, Promise) {
  return knex.schema.createTable("contacts", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("mobile");
    table.string("email");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("contacts");
};
