/*#uwsz1RnTQJ1
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let num1= +prompt('Enter first number');
let num2= +prompt('Enter second number');
if (num1 > num2)
{
    console.log(num1 + '>' + num2);
}
else if (num1 < num2)
{
    console.log(num1 + '<' + num2);
}
else if (num1 === num2)
{
    console.log(num1 + '=' + num2);
}
else
{
    console.log('error');
}