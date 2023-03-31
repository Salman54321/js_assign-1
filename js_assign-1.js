// Question 1
var age = 25;
/* variable defined wit let can not be redeclared */
let age_as_string = "age";
console.log(age);
console.log(age_as_string);


// Question 2
let number = prompt("Enter a Number to check either even or odd");
if (number % 2 == 0)
{
  alert(number + 'Number is even');
}
else 
{
  alert(number + 'Number is odd')
}

// Question 3
let temp;
temp = 72;
console.log(temp+' '+ 'Temperature in Fahrenheit');
let celsius = (temp - 32) * 5/9;
console.log(celsius +' '+ 'Temperature in celsius');

// Question 4
let name = prompt('enter your name')
let age = prompt('enter you age')

/* if the age is greater than and equals to 18 */
if (age >= 18)
{
  console.log(`Welcome ${name}, you are an adult`);
}
else
{
  console.log(`Welcome ${name}, you are not adult`)
}

// Question 5
let is_Raining =! false;

if (is_Raining)
{
  console.log('Bring an Umbrella');
}
else 
{
  console.log('Leave Umbrella at Home');
}

/* another way */
let isRaining = true;

if (isRaining)
{
  console.log('Bring an Umbrella');
}
else 
{
  console.log('Leave Umbrella at Home');
}
