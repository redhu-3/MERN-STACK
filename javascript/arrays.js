
function double(num){
    return num*2;
}
let arr=[2,3,4,5,6]
let doublearr=arr.map(double);
console.log(doublearr);
//arrow function
const tripleArr=arr.map((n)=>n*3);
console.log(tripleArr);