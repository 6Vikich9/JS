/*#EP5I1UUzAX
Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
Приклад моделі кінцевого об’єкту
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let getColor = (suit) => (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';

let deck = suits.flatMap(suit =>
    values.map(value => (
        {
        cardSuit: suit, value,
        color: getColor(suit)
    }))
);

let reduce = deck.reduce((accumulator, card) =>
{
    if (card.cardSuit === 'spade')
    {
        accumulator.spade.push(card);
    }
    else if (card.cardSuit === 'diamond')
    {
        accumulator.diamond.push(card);
    }
    else if (card.cardSuit === 'heart')
    {
        accumulator.heart.push(card);
    }
    else if (card.cardSuit === 'clubs')
    {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spade: [], diamond: [], heart: [], clubs: []});
console.log(reduce);
