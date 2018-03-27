

exports.up = function(knex,Promise){
   return knex.schema.createTable('blog', table=>{
    table.increments('blog_id').primary();
    table.string('title');
    table.string('post');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('user_id')
           .references('user_id')
           .inTable('users');


    });
  };


exports.down = function (knex,Promise){
  return knex.schema.dropTable('blog')

}
