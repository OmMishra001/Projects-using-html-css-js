let arr = [2, 10, 20, 15, 1, 30, 3, 4, 6, 5, 9, 8, 11, 25, 34, 23, 32, 22, 20, 31];

let i;
for (i = 0; i < arr.length; i++) {
    
    for (j = 0; j < arr.length; j++)
    
    if (arr[j] >= arr[j + 1]) {
        let a = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = a
    }
}
console.log(arr);

