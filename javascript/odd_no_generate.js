function oddeven(num) {
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

const arr = [1, 3, 44, 2, 55, 22, 2];
console.log(arr.map(oddeven));
let odd=arr.filter(oddeven);
console.log(odd);