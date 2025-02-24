/*#sA3Gg1sCp
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let book1 =
    {
        title: 'Dwa kresla',
        pageCount: 300,
        genre: 'horor',
        author :
            {
                name: 'Galinas',
                age: 27
            }
    }
console.log(book1);
let book2 =
    {
        title: 'telek',
        pageCount: 50,
        genre: 'fantasy',
        author :
            {
                name: 'Petro Schur',
                age: 56
            }
    }
console.log(book2);
let book3 =
    {
        title: 'duhovka',
        pageCount: 5000,
        genre: 'detektive',
        author :
            {
                name: 'Pituh',
                age: 12
            }
    }
console.log(book3);