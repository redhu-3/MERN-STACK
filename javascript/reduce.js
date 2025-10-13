let arr=[1,2,3,4,5]
let sum=arr.reduce((p,current)=>
{
    return p*current;
},1);
console.log(sum);