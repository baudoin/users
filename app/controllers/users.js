var UsersController = Em.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  usersCount: function(){
    return this.get('model.length');
  }.property('@each')
});

export default UsersController;