const arr=[12,333,44,565,7,7979];
const double=arr.map((n)=>
{
    return n*3;
});
console.log(double);
const fil=arr.filter((n)=>
{
    if(n%2==0)
    {
        return true;
    }
}
)
console.log(fil);
const sum=arr.reduce((p,current)=>{
    return p*current;
},1)
console.log(sum);