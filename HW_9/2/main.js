/*#OPLI89c9G
– Є масив:
    [‘Main’,’Products’,’About us’,’Contacts’]
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

let allLi = document.getElementsByClassName('ul') [0];
let navigation = ['Main','Products','About us','Contacts'];
for (const elements of navigation)
{
    let ul = document.createElement('li');
    ul.innerText = elements;
    allLi.appendChild(ul);
}
