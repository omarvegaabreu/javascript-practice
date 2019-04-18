var john = {
  firsName: 'John',
  lastName: 'smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'Teacher',
  isMarried: false,
  // you can do a function inside an object
  calAge: function () {
    /***
     * another usage of this keyword
     * used to return a valua to age variable inside 
     * the object.
     */
    this.age = 2018 - this.birthYear;
  }
};
john.calAge();