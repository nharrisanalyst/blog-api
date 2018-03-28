

exports.seed = function (knex, Promise){
  return knex('blog').del().then(()=>{
    return knex('blog').insert([
      {title:'my first blog post title', post:'This is my first blog post post it was written fast', user_id:1}
    ]);
  });
};
