const john = {
  name: 'John',
  lastName: 'Smith',
  bills: [124, 48, 268, 180],
  tips:[], 
  finalValue:[],
  calcTip: function () {
    this.tips=[];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++){
      //determine the percentage base on tipping rules
      let percentage;
      const bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] = bill * percentage;

    }
  }
}

john.calcTip();
console.log(john);