// ASSIGNMENT 08:
// Ascending order
function valueSortAsc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;  // Return the sorted array
}

// Descending order
function valueSortDesc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;  // Return the sorted array
}


let numbers = [34, 7, 23, 32, 5, 62];

console.log("Original Array: ", numbers);

let ascSorted = valueSortAsc(numbers); 
console.log("Sorted in Ascending Order: ", ascSorted);

let descSorted = valueSortDesc(numbers);
console.log("Sorted in Descending Order: ", descSorted);
