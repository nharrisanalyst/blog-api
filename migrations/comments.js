

exports.up = function(knex,Promise){
  return  knex.schema.createTable('comments', table=>{
      table.increments('cid').primary();
      table.string('title');
      table.string('post');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('user_id')
            .references('user_id')
            .inTable('users');
      table.integer('blog_id')
           .references('blog_id')
           .inTable('blog');
  });
};


exports.down = function(knex,Promise){
  return knex.schema.dropTable('comments');
};
