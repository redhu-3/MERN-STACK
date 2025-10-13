let  a=["apple","banana","grapes","mango","papaya"];
//const [one,two]=a;
//console.log(two);

const [one,...two]=a;
console.log(two);



let num=[1,2,3,4,5,6]
let n=[0,...num,6,7]
//console.log(n);
const o1={
    x:3,y:5
}
const o2={
    y:6,z:7
}
const spread={...o1,...o2};
console.log(spread);