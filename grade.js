var grade = 50 

// if(grade > 0 && grade < 59){
// 	console.log("F");
// }
// else if(grade > 59 && grade <= 69){
// 	console.log("D");
// }
// else if(grade > 69 && grade <= 79){
// 	console.log("C");
// }
// else if(grade > 79 && grade <= 89){
// 	console.log("B");
// }
// else{
// 	console.log("A");
// }

switch (true) 
{
  case grade > 0 && grade < 59:
    console.log("F");
    break;
  case grade > 59 && grade <= 69:
    console.log("D");
    break;
  case grade > 69 && grade <= 79:
    console.log("C");
    break;
  case grade > 79 && grade <= 89:
    console.log("B");
    break;
  case grade > 89 && grade <= 100:
    console.log("A");
    break;
  default:
    console.log("Not a standard grade");
    break;
}
