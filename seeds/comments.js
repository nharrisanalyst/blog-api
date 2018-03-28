

exports.seed = function(knex, Promise){
  return knex('comments').del().then(()=>{
    return knex('comments').insert([
      {title:'first comment',post:'this is a comment', user_id:1, blog_id:1}

      ]);
  });
};
