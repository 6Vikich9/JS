/*#kpsbSQCt2Lf
- створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

let swap = (arr, index1, index2) =>
{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

let arr = [11, 22, 33, 44];
let swapped = swap(arr, 2, 1);
console.log(swapped);
