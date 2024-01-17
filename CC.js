let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let age = 18;
if (age > 18 && earlyRegister ){
  raceNumber+=1000;
  // console.log('working');
}
if (age > 18 && earlyRegister){
console.log(`Your race starts at 9:30am and your raceNumber is
${raceNumber}`);
}else if (age > 18 && !earlyRegister){
  console.log(`Your race starts at 11:00am and your raceNumber is
${raceNumber}`);
}else if(age<18){
  console.log(`Your race starts at 12:30am and your raceNumber is ${raceNumber}`);
}else{
  console.log('Please visit registration desk!')
}