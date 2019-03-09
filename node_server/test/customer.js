var customer = require('../src/customer');
var expect = require('chai').expect;

describe("First name", function() {
  it("Should return a string value", function() {
      expect(customer.getter.getFirstName()).to.be.a('string');
  })
});

describe("Last name", function() {
  it("Should return a string value", function() {
      expect(customer.getter.getLastName()).to.be.a('string');
  })
});

describe("Full name", function() {
  it("Should return a string value", function() {
      expect(customer.getter.getFullName()).to.be.a('string');
  })
});

describe("Age", function() {
  it("Should return the age", function() {
      expect(customer.getter.getAge()).to.be.a('number');
      expect(customer.getter.getAge()).to.be.above(1);
      expect(customer.getter.getAge()).to.be.below(100);
  })
});