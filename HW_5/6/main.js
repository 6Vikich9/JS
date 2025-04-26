/*#hOL6126
- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий*/

let printText = (text) =>
{
    document.write
    (
            `
            <ul>
                <li>${text}</li>
            </ul>
            `
    );
}

printText('Text');
printText('Text');
printText('Text');