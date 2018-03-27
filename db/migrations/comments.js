

exports.up = function(knex,Promise){
  knex.schema.createTable('comments', table=>{
      table.increments('cid').primary();
      table.string('title');
      table.string('post');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.foriegn('auth_id')
            .references('uid')
            .inTable('users');
      table.foriegn('blog_id')
           .references('blog_id')
           .inTable('blog');

  });
};


exports.down = function(knex,Promise){
  return knex.schema.dropTable('comments');
};
