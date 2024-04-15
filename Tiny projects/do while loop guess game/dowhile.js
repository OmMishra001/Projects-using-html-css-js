let num = Math.floor(Math.random() * 10);

// alert(num);

let guess = 0;
let temp = 0;
do {
  let guess = +prompt("enter any no.");

  if (num == guess)
   {
    alert("wow you got it");
    break;
  } 
  else if (guess<num) 
  {
    alert("your no is smaller then the guess");
  }
   else if (guess>num)
   {
    alert("your no is greater then the guess");
  }

  temp = temp+1;

} 

while(guess!=num);

alert("you have taken " +temp+ " attempts to guess the no.");

// -----------------------------------------------------------------------------------------------------------

// let str = num.toString();

// console.log(str);

// console.log(str.length)