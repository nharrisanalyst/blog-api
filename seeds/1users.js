

exports.seed = function(knex, Promise){
  return knex('users').del().then(() =>{
    return knex('users').insert ([
      {username:'test',password:'12345', name:'test smith', email:'test@test.ll'}

    ]);
  });

};
