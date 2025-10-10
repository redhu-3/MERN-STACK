let oj1={age:33}
let oj2=oj1;
oj1.age=22;
console.log(oj2.age);

function sum(a,b)
{
    return a+b;
}
console.log(sum(10,20));
const sum2=(a,b)=>{
    return a+b;
};
console.log(sum2(22,20));