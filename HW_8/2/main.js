/*#AiN5CoUQ
Створити функцію, яка робить глибоку копію об’єкта.
Додати перевірки на undefined, null, NaN.
Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.*/

function deepClone(value)
{
    if (value === null) return null;
    if (typeof value === 'undefined') return undefined;
    if (typeof value === 'number' && isNaN(value)) return NaN;
    if (typeof value !== 'object' && typeof value !== 'function') return value;

    if (typeof value === 'function')
    {
        return value.bind({});
    }

    if (Array.isArray(value))
    {
        return value.map(item => deepClone(item));
    }

    const clonedObject = {};
    for (const key in value)
    {
        if (Object.hasOwnProperty.call(value, key))
        {
            clonedObject[key] = deepClone(value[key]);
        }
    }
    return clonedObject;
}


const original =
{
    name: 'Vika',
    age: NaN,
    greeting()
    {
        console.log('Hello!');
    },
    items: [1, null, undefined, () => 'ok']
};

const cloned = deepClone(original);

console.log(cloned.name);
console.log(cloned.age);
console.log(cloned.items[2]);
console.log(cloned.items[3]());
cloned.greeting();





