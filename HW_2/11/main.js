/*#iBvqtjEm
 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).*/

let x = prompt('Enter'); // Будь-яке значення

if (x===null || x === 0 || x === '' || x === false || x === NaN || x === undefined)
{
    x = "default";
}

console.log(x);

