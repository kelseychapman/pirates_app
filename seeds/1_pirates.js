exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return knex('pirates').del()
  .then(function() {
   return Promise.all([
    // Inserts seed entries
    knex('pirates').insert({
     name: 'One-Eyed Willy',
     poison: 'Whiskey',
     accessory: 'eye patch',
     image_url: 'https://s-media-cache-ak0.pinimg.com/originals/10/42/da/1042da49e629b0a05fcd8ea9b81a37ea.jpg'
    }),
    knex('pirates').insert({
      name: 'Blackbeard',
      poison: 'Rum',
      accessory: 'peg leg',
      image_url: 'https://s-media-cache-ak0.pinimg.com/originals/9d/e0/ef/9de0ef179d0f2459a08aedfeedaeb808.jpg'
    }),
    knex('pirates').insert({
      name: 'Anne Bonney',
      poison: 'Rum',
      accessory: 'hot temper',
      image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'
    })
   ]);
  });
};
