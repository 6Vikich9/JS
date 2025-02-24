/* #coYydZuaeEB
- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/

let day =
    [
        {
            id: 1, temperature: [4, 10, 3]
        },
        {
            id: 2, temperature: [2, 4, -1]
        },
        {
            id: 3, temperature: [3, 5, 7]
        },
        {
            id: 4, temperature: [-2, 1, -4]
        },
        {
            id: 5, temperature: [-6, -2, -9]
        },
        {
            id: 6, temperature: [6, 9, 0]
        },
        {
            id: 7, temperature: [5, 3, 0]
        }
    ]
let day1= day[0];
console.log( 'day', day1['id'], 'morning :', day1['temperature'][0],'day :',day1['temperature'][1],'evening :',day1['temperature'][2]);
let day2= day[1];
console.log( 'day', day2['id'], 'morning :', day2['temperature'][0],'day :',day2['temperature'][1],'evening :',day2['temperature'][2]);
let day3= day[2];
console.log( 'day', day3['id'], 'morning :', day3['temperature'][0],'day :',day3['temperature'][1],'evening :',day3['temperature'][2]);
let day4= day[3];
console.log( 'day', day4['id'], 'morning :', day4['temperature'][0],'day :',day4['temperature'][1],'evening :',day4['temperature'][2]);
let day5= day[4];
console.log( 'day', day5['id'], 'morning :', day5['temperature'][0],'day :',day5['temperature'][1],'evening :',day5['temperature'][2]);
let day6= day[5];
console.log( 'day', day6['id'], 'morning :', day6['temperature'][0],'day :',day6['temperature'][1],'evening :',day6['temperature'][2]);
let day7= day[6];
console.log( 'day', day7['id'], 'morning :', day7['temperature'][0],'day :',day7['temperature'][1],'evening :',day7['temperature'][2]);