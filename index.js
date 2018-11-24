// Code your solutions in this file
const employees = ["Ada", "Brendan", "Ali"];

function printBadges(employees) {
  for (let i = 0 ; i < 3 ; i++){
      console.log('Welcome ${employee[i]}! You are employee #${i + 1}.');
  }
  return employees;
}

printBadges(employees);


function tailsNeverFails(){
  let tails = 0;
  while (Math.random() >= 0.5){
    tails++;
  }
  return 'You got ${tails} tails in a row!';
};
