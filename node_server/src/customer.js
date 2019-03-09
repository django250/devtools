var self = module.exports = {

  data(){
    return {
      single_name: 'Rick',
      last_name: 'Zwijnenberg',
      age: 23,
    }
  },

  getter: {
    getFullName(){
      return self.data().single_name + ' ' + self.data().last_name;
    },
    getFirstName(){
      return self.data().single_name;
    },
    getLastName(){
      return self.data().last_name;
    },
    getAge(){
      return self.data().age;
    }

  },

}