if (Posts.find().count() === 0){
  Posts.insert({
    title: 'introducing Telescope',
    url:  'http://sachs.com'
  });
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });
  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
