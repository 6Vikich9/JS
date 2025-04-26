/*#bovDJDTIjt
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок. */

let  printerArray = (users) =>
{
    for (const user of users)
    {
        document.write
        (
            `
                <div>
                    Id: ${user.id}, 
                    Name: ${user.name}, 
                    Age: ${user.age}
                </div>
            `
        );
    }
}

let users =
    [
        {
            id: 1,
            name: 'ihor',
            age: 24
        },
        {
            id: 2,
            name: 'vova',
            age: 23
        },
        {
            id: 3,
            name: 'sasha',
            age: 25
        }
    ];
printerArray(users);