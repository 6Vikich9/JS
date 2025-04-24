/*#pghbnSB
- створити функцію яка повертає найменьше число з масиву*/

function number(n)
{
    let min = n[0];
    for (let i = 1; i < 0; i++)
    {
        if (n[i] < min)
        {
            min = n[i];
        }
    }
    return min;
}

let n = [1, 2, 3, 4, 5];
console.log(number(n));
