const Mike = {
  name: 'Mike',
  lastName: 'Smith',
  mass: 78,//kg
  height: 1.69,//meters
  bmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi();
    
  }
  
  
}
console.log(this.bmi);