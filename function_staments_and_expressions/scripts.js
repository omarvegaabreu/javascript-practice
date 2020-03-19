/***
 * Function statement and expression
 */

 /**
  * function declaration

  * 
  * function whatDoYouDo(argument, argument2) {

  }
  *
  */

  /**
   * Function expression:
   * expression will always return a value, or an immediate result. 
   */

const whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' Teaches kids how to code';
    case 'driver':
      return firstName + ' Drives uber part time ';
    case 'designer':
      return firstName + ' Builds awesome websites! ';
    default:
      return  'I don\'t know this person.';
  }
};
const jose = whatDoYouDo('teacher', 'Jose');
const ana = whatDoYouDo('driver', 'Ana');
const josefa = whatDoYouDo('designer', 'Josefa');
const james = whatDoYouDo('homeless', 'James');

console.log(jose, ana, josefa, james);

