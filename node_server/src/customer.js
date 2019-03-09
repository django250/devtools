var self = module.exports = {

  data(){
    return {
      single_name: 'Rick',
      last_name: 'Zwijnenberg',
    }
  },

  getter: {
    getFullName(){
      console.log('Get full name');
      return self.data().single_name + ' ' + self.data().last_name;
    },
    getFirstName(){
      console.log('Get first name');
      return self.data().single_name;
    },
    getLastName(){
      console.log('Get last name');
      return self.data().last_name;
    },
  },

}